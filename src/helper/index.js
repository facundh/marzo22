
export const getRealPath = (pathname) => {

    const arrPathName = pathname.split('/');
    return arrPathName[1];
    
}

