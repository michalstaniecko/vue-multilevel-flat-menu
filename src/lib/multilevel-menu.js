function getChildrenOfChild( menuTree, menuItem ) {
    const child = { ...menuItem };
    const childrenOfChild = menuTree.filter( ( item ) => item.parentId === child.id );

    if (!child.children) {
        child.children = [];
    }

    if (childrenOfChild.length > 0) {
        childrenOfChild.forEach( ( childItem ) => {
            childItem = getChildrenOfChild( menuTree, childItem );
            if (child.children.some( ( item ) => item.id === childItem.id )) {
                return;
            }
            child.children.push( { ...childItem } );
        } );
    }
    return child;
}

export function flatMenuToMultilevel( menu ) {
    const menuTree = [];

    menu.forEach( menuItem => {
        menuTree.push( { ...menuItem } );
    } )

    menu.forEach( ( menuItem ) => {
        if (menuItem.parentId === 0) {
            return;
        }

        const child = getChildrenOfChild( menuTree, menuItem );

        const parentIndex = menuTree.findIndex( ( item ) => item.id === child.parentId );
        if (!menuTree[parentIndex].children) {
            menuTree[parentIndex].children = [];
        }
        menuTree[parentIndex].children.push( { ...child } );
    } );

    return menuTree.filter( ( menuItem ) => menuItem.parentId === 0 );
}
