// 📘 쿠키, 세션, 로컬 스토리지 


// 🟦 쿠키 생성함수 
function createCookie(name, value) {

    // 현재 날짜, 시간 정보를 가진 객체 생성
    let date = new Date();

    // 10초의 유효기간 설정. (밀리세컨즈 단위)
    date.setTime(date.getTime() + 10000)

    document.cookie = name + "=" + value + ';expires=' + date.toUTCString() + ";path=/";
    // vscode 란에 폴더가 있으면 > path=/2023 이렇게 가야   

}

createCookie("팝업", true);
    // 😥😥😥😥😥😥😥😥😥😥😥😥 안 되는데? 쿠키가? 
    // 밑에 까지 들어가야 있어 

// expires=' 이 부분 = 이 수정!!! ⭐⭐⭐⭐⭐⭐⭐⭐ 



// 🟦 세션 
    // 사용자가 브라우저를 이용하는데, '하나의 상태'를 관리할 때
    // '상태' 의 예 : 로그인 

    // [세션으로 뭘 해?]
        // 로그인 서버쪽에서, 서버ID 를 생성 > 프론트에서 세션의 ID 를 서버에서 받는다. > 이걸 사용
        // '토큰' 이라는 ID 있으면 > '로그인 유효한지 확인' > 로그인 유지 여부를 결정 ⭐⭐
        // 로그인 상태가 맞는지 확인

    // [특징]
        // 브라우저가 종료될 때 까지! 유지된다. 


// 🔷 프론트에서 만들어보기 

// setItem 메소드 :
    // [매개변수] 
        // 첫번째 매개변수 : 키
        // 두 번째 매개변수 : 값 

    // 값을 저장!
        sessionStorage.setItem('Token' , "데이터 내용");
        // 브라우저 종료하면 > 여기서 만든 세션이 사라짐 ⭐⭐⭐⭐⭐ 
        // 쿠키는 '유지기간' 이 종료되어야 사라져 ⭐⭐⭐ 

    // 세션에 저장된 데이터를 '호출' 하기
        // getItem 세션에 저장된 데이터를 '호출' 
        // 매개변수는 '키값' 을 전달 
        console.log(sessionStorage.getItem('Token'));

    // 문서에 내용을 쓰기 추가 하기 
        // HTML 페이지에서 바로 보임 ⭐⭐⭐⭐⭐⭐ 
        // 문자열로 추가된다. 
        document.write(sessionStorage.getItem('Token'));


    // 세션의 길이 구하는 법
    document.write(sessionStorage.length)
        // [결과해석]
            // 2 : 지금 켜져 있는 세션이 2개! 라는 것 (라이브서버랑, Token)


    // 세션의 키값을 '인덱스' 로 호출 
        // key 라는 메소드가 있음. 
        document.write( sessionStorage.key(1) ) 
            // Token 이 나옴
        document.write( sessionStorage.key(0) )


    // 세션 삭제 
        // clear : 세션 전체 삭제 
        sessionStorage.clear();

    


// 🟦 로컬 스토리지 

    // 로컬스토리지에 '추가' 하는 메소드
    window.localStorage.setItem( "key", "value" );

    // 로컬 스토리지 값을 '호출' (가져오기)
    window.localStorage.getItem( "key" );
        // 해당 키에 맞는 값을 가져온다. 

    
    // 로컬스토리지 전체 값을 제거 
    window.localStorage.clear();


    // 로컬스토리지 길이 
    window.localStorage.length;


    // 로컬스토리지 키값 호출
    window.localStorage.key(0);
        // 0번째 key 값 호출!
        // 😥 여기 살짝 key 값 넣는거 이해 필요 


