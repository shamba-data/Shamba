export declare type QueryType = 'query' | 'infinite' | 'any';
/**
 * To allow easy interactions with groups of related queries, such as
 * invalidating all queries of a router, we use an array as the path when
 * storing in tanstack query. This function converts from the `.` separated
 * path passed around internally by both the legacy and proxy implementation.
 * https://github.com/trpc/trpc/issues/2611
 */
export declare function getArrayQueryKey(queryKey: string | [string] | [string, ...unknown[]] | unknown[], type: QueryType): [string[], {
    input?: unknown;
    type?: Exclude<QueryType, 'any'>;
}];
//# sourceMappingURL=getArrayQueryKey.d.ts.map