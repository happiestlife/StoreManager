const login: ({ id, password }: { id: string, password: string }) => boolean = ({id, password}) => {
    // TODO 서버 구축 완료 시 API 호출로 변경 
    if(id === 'test' && password == '1234') {
        return true;
    }
    else {
        return false;
    }
}

export {login};