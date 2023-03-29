// 📚 쿠키, 세션, 로컬, 스토리지 


// 🟦 지난 시간 수업 비교해서, 쿠키 생성함수에서 '수정할 부분' 
function createCookie (name, value) {

    // 현재 날짜, 시간 정보를 가진 객체 생성
    let date = new Date();

    // 10초의 유효기간 설정 (밀리세컨즈 단위)
        // get time 이라는 key 에 설정된 함수를 가져와 > 그래서 getTime() 으로 실행
    date.setTime(date.getTime() + 10000)

    // document 라는 객체 중 cookie 라는 key에 '쿠키 규격' 에 맞게 넣을거야! 
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/"; 
    
}

createCookie("팝업", true);

// ⭐⭐ 수정된 부분은 expires 에서 = 을 추가 해야 함. 



// 🟦 세션
    // 사용자가 브라우저를 이용할 때, '하나의 상태' 를 관리할 때 
    // '하나의 상태' 의 예시 : 로그인 

    // [세션으로 하는 것?]
        // 서버쪽에서 서버ID 를 생성한다. > 프론트 쪽에서 ID 를 서버로 부터 받는다. 
        // "'토큰' 이라는 ID 가 있으면,  로그인이 유효함!" 을 근거로 '로그인 유지 여부' 를 결정. 
        // '토큰' 정보로 '로그인 상태'가 맞는지를 확인. 

    // [특징]
        // 브라우저가 종료되면 > 끝 
        // 브라우저가 살아있을 때만! 유지 
        // node.js

    // 🔷 setItem 메소드 : 해당 key 에, 해당 value 를 "저장하기"
        sessionStorage.setItem('Token' , '데이터 내용')
            // [매개변수]
                // 첫 번째 매개변수 : key
                // 두 번째 매개변수 : value 

            // [특징]
                // 브라우저가 '종료' 되면, 여기서 만든 세션데이터가 사라짐. 

            // [해석]
                // 로그인 관리할 때, token 정보가 필요 
                // 이 순간, token 이라는 key 를 만든건가❓❓❓❓❓ 

            // [확인하기]
                // 개발자 도구 > application > session storage > 해당 ip 로 가면 볼 수 있음. 


    // 🔷 getItem : session 스토리지에 저장된 데이터를 '호출' 
        console.log(sessionStorage.getItem('Token'))


// 🟦 document.write 기능 ⭐⭐⭐⭐⭐⭐⭐⭐ 
    // [기능]
        // 문서에 내용을 바로 쓸 수 있다. 

    // [예문]
        document.write(sessionStorage.getItem('Token'));


// 🔷 세션의 길이 구하는 법 
    // 지금, 개발자 도구 > application > session storage 에 몇 개의 세션이 있는지 
    document.write(sessionStorage.length)


// 🔷 session storage 에 저장된 것들의 '키' 값을 인덱스로 호출
    document.write(sessionStorage.key(1))


// 🔷 세션 삭제 
    sessionStorage.clear();


// 🟦 local storage 
    // 🔷 로컬 스토리지에 '추가' 하는 메소드 
        window.localStorage.setItem( "key가 오는 자리", "value 가 오는 자리")
            // [저장된 값 확인]
                // ⭐⭐⭐⭐⭐ 개발자 도구 > application > local storage 에서 확인 가능 
            // [특징]
                // 브라우저를 꺼도 사라지지 않아. 
        
    // 🔷 이미 저장되어 있는 로컬 스토리지에서 값을 호출
        console.log(window.localStorage.getItem("key가 오는 자리"))
            

    // 🔷 실제 개발자 도구에 있는 로컬 스토리지의 개수 구하기 
    console.log(window.localStorage.length);


    // 🔷 로컬 스토리지 'key' 값 호출 
    console.log(window.localStorage.key(0))


    // 🔷 로컬 스토리지 ⭐⭐"전체 값"⭐⭐을 제거 
    // window.localStorage.clear();
        // 그러면, 실제로 개발자 도구에 있는 local storage 값이 모두 사라짐 ⭐⭐⭐⭐⭐ 
