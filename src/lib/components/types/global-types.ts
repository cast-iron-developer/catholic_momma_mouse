/**
 * Navigation Related Types
 * */
export type NavigationItemType = {
	title: string
	href: string
}

export type NavigationListType = {
	navigationListItems: NavigationItemType[]
}

export type NavigationListProps = {
	listStyles?: string,
	listAnchorStyles?: string,
	listItemStyles?: string,
	listData: NavigationListType
}

export type NavigationItemProps = {
	anchorStyles?: string,
	listStyles?: string,
	item: NavigationItemType
}