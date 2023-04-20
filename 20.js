document.addEventListener('DOMContentLoaded', () => {
    const boxs = document.querySelectorAll('.box');
    const bt1 = document.querySelector('#bt1');
    //초기 배열 : 1이 폭탄 위치
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    //클릭 확인
    let flag = true;
    //하트개수
    let cnt = 0;
    //눌러진 순서
    let selarr = [];

    //폭탄 섞기 버튼
    bt1.addEventListener('click', () => {
        if (flag) {
            arr.sort(() => Math.random() - 0.5);
            // console.log(arr);
            flag = false;  //한번만 섞이게 false로 잡아줌.
           cnt = 0;
           selarr = [];
           
            for (let box of boxs) box.innerHTML = box.getAttribute('id').replace('box', '');
        }
    });
    //sort를 이용해서 셔플을 해줌 배열 섞기
    //if 안에 트루 펄스 안해도 됨 괄호안에 자체가 트루임 = 플래그 자체가 트루
    //div박스 제어
    document.querySelector('h2').innerHTML = '';

    for (let box of boxs) {
        //박스 번호 넣기   슬라이스 끝에서 한개 끊기
        // box.innerHTML = box.getAttribute('id').slice(-1);
        box.innerHTML = box.getAttribute('id').replace('box', '');

        //박스 클릭이벤트 처리
        box.addEventListener('click', () => {
            //let n = parseInt(box.getAttribute('id').replace('box', ''));

            let n = parseInt(box.textContent);
            if (isNaN(n)) return;

            console.log('n=', n, 'selarr=', selarr);
            //폭탄이 눌러지지 않은 경우 
            if (!flag) {
                //선택 항목 추가

                selarr.push(n);
                cnt++;
                console.log(cnt);
                //폭탄 하트 구분
                if (arr[n - 1] == 0) {
                    //하트
                    box.innerHTML = '<img src ="./hart.png">';
                    if (cnt == 8) {
                        flag = true;
                        document.querySelector('h2').innerHTML = "성공!!!"

                        let lastArr = [1,2,3,4,5,6,7,8,9].filter((item)=>selarr.includes(item));
                        console.log(lastArr);
                    }

                } else {
                    //폭탄
                    box.innerHTML = '<img src ="./boom.png">';
                    flag = true;
                    document.querySelector('h2').innerHTML = '실패!!!';
                }
            }
        })
    }
})