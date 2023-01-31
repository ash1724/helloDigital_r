;(function($){

  const skhynix = {
    init:function(){
      this.header();
      this.section1();
      this.section2();
      this.section4();
      this.footer();
    },
    header:function(){
      $('.main-btn').on({
        mouseenter:function(){
          $('.sub').addClass('on');
        }
      })

      $('#nav').on({
        mouseleave:function(){
          $('.sub').removeClass('on');
        }
      })

      $('#mobile-menu').on({
        click(e){
          e.preventDefault();
          $('#mobile-menu .bar').toggleClass('on');
          $('#monileNav').slideToggle(300);
        }
      });

      $('.plus1').on({
        click(e){
          e.preventDefault();
          $(this).toggleClass('on');
          $('.sub1').toggleClass('on');
        }
      });
      $('.plus2').on({
        click(e){
          e.preventDefault();
          $(this).toggleClass('on');
          $('.sub2').toggleClass('on');
        }
      });
      $('.plus3').on({
        click(e){
          e.preventDefault();
          $(this).toggleClass('on');
          $('.sub3').toggleClass('on');
        }
      });


    },
    section1:function(){
      let cnt = 0;
      let setId = 0;
      // let step = 0;

      $(window).resize(function(){
        var winWidth = $(window).width();
        var boxWidth = $('.slide-container').width();
        //max-width값인 500px아래서만 작동
        if(winWidth <= 525){
          $('.slide-container').height(boxWidth*1.112);
          $('.slide-view').css('height','100%');
        }
        else if(winWidth <= 768){
          //1.681:1
          $('.slide-container').height(boxWidth*0.82161458333);
          $('.slide-view').css('height','100%');
        }
        else if(winWidth <= 1194){
          $('.slide-container').height(boxWidth*0.37269681742);
          $('.slide-view').height(boxWidth*0.37269681742);
        }
        else {
          $('.slide-container').css('height','446px');
          $('.slide-view').css('height','446px');
        }
      });


      function mainSlide(){
        $('.slide-wrap').animate({ left: -100 * cnt + '%' }, 600, function(){
          cnt>=3 ? cnt=0 : cnt;
          cnt<=-1 ? cnt=2 : cnt;
          $('.slide-wrap').animate({ left: -100 * cnt + '%' }, 0);

          $('.circle').removeClass('on');
          $(`.circle${cnt+1}`).addClass('on');
        })

        // setTimeout(countTimer, 1000);
      }
      function nextCount(){
        // step = 0;
        cnt++;
        mainSlide();
      }
      function prevCount(){
        // step = 0;
        cnt--;
        mainSlide();
      }
      function autoTimer(){
        setId = setInterval( function(){
          nextCount();
          countTimer(); //타이머 카운트 바
        }, 3000);

      }
      autoTimer();

      $('#section1 .control-btn, #section1 .circle-box').on({
        mouseenter:function(){
          clearInterval(setId);
        },
        mouseleave:function(){
          autoTimer();
        }
      });

      $('#section1 .prev-btn').on({
        click: function(){
          if($('#section1 .slide-wrap').is(':animated')===false){
            prevCount();
          }
        }
      });

      $('#section1 .next-btn').on({
        click:function(){
          if($('#section1 .slide-wrap').is(':animated')===false){
            nextCount();
          }
        }
      });

      $('#section1 .circle1').on({
        click: function(){
          cnt = 0;
          step = 0;
          mainSlide();
        }
      });
      $('#section1 .circle2').on({
        click: function(){
          cnt = 1;
          step = 0;
          mainSlide();
        }
      });
      $('#section1 .circle3').on({
        click: function(){
          cnt = 2;
          step = 0;
          mainSlide();
        }
      });

      countTimer();  // 처음 1번 실행

      function countTimer(){ // 프로그레스바
        // console.log("실행");

        let step = 0;
        let setT = 0;
        let f = true;
        // console.log("처음" + step);
        clearInterval(setT);
        setT = setInterval(function(){
          step += 1;
          if( step >= 300 ) {
            clearInterval(setT);
            step=1;
          }
          else {
            // console.log("결과" + Math.floor(step));

            if( Math.floor(step) >= 295 && f == true) {
              // console.log("완료");
              // nextCount();
              f = false;
            }
            $('.slide #myBar').stop().css({width: step});
          }
        },10);
      }

    },
    section2:function(){
      let txt = '';

      function 반복함수(newarray){
        $.each(newarray, function(idx, item){
          if( idx == 0 ){
            txt = `
              <div class="large-card">
                <div class="large-card-gap">
                  <div class="img-box">
                    <a href="#"><img src="./img/${item.이미지}" alt=""></a>
                  </div>
                  <div class="con-box">
                    <div class="text-box">${item.종류}</div>
                    <a href="#">
                      <h2>${item.설명1}</h2>
                    </a>
                    <p>${item.설명2}</p>
                  </div>
                </div>
              </div>
            `
          }
          else if( idx >= 1 && idx <= 8 ) {
            txt += `<div class="small-card smallCard${idx+1}">`
            txt += `  <div class="img-box">`
            txt += `    <a href="#"><img src="./img/${item.이미지}" alt=""></a>`
            txt += `  </div>`
            txt += `  <div class="text-box-purple">${item.종류}</div>`
            txt += `  <a href="#">`
            txt += `    <h3>${item.설명1}</h3>`
            txt += `  </a>`
            txt += `</div>`
          }
          else if( idx == 9 ){
            txt +=`
              <div class="bottom-card">
                <h2>DRAM과 NAND라는 양 날개로 지속적인 사업 성장을 도모합니다</h2>
                <a href="#">
                  <h4>제품정보 더보기</h4>
                  <i class="fas fa-external-link-alt"></i>
                </a>
                <img src="./img/Bitmap.jpg" alt="">
              </div>
            `
          }
          else if(idx >= 10 && idx <= 11){
            txt += `<div class="small-card smallCard${idx+1}">`
            txt += `  <div class="img-box">`
            txt += `    <a href="#"><img src="./img/${item.이미지}" alt=""></a>`
            txt += `  </div>`
            txt += `  <div class="text-box-purple">${item.종류}</div>`
            txt += `  <a href="#">`
            txt += `    <h3>${item.설명1}</h3>`
            txt += `  </a>`
            txt += `</div>`
          }
        });
      }

      $.ajax({
        url:"./board_json/sec2-con.json",
        dataType:"JSON",
        success: function(res){

          반복함수(res.sec2Con);

          $('#section2 .grid-container').append(txt);


          $('.tab-btn').on({
            click: function(e){
              e.preventDefault();
              $('.tab-btn').removeClass('on');
              $(this).addClass('on');
            }
          });

          $('.tab-btn-1').on({ // 추천
            click: function(e){
              e.preventDefault();
              반복함수(res.sec2Con);
              $('#section2 .grid-container').html(txt);
            }
          });

          $('.tab-btn-2').on({ // 기술
            click: function(e){
              e.preventDefault();
              const tech = res.sec2Con.filter(function(item){
                return item.종류 == "기술";
              });

              반복함수(tech);

              $('#section2 .grid-container').html(txt);
            }
          });

          $('.tab-btn-3').on({ // 사람&문화
            click: function(e){
              e.preventDefault();

              const saram = res.sec2Con.filter(function(item){
                return item.종류 == "사람&문화";
              });
              반복함수(saram);
              $('#section2 .grid-container').html(txt);
            }
          });
          $('.tab-btn-4').on({ // 지속가능경영
            click: function(e){
              e.preventDefault();

              const jisoc = res.sec2Con.filter(function(item){
                return item.종류 == "지속가능경영";
              });
              반복함수(jisoc);
              $('#section2 .grid-container').html(txt);
            }
          });
          $('.tab-btn-5').on({ // 보도자료
            click: function(e){
              e.preventDefault();

              const bodo = res.sec2Con.filter(function(item){
                return item.종류 == "보도자료";
              });
              반복함수(bodo);
              $('#section2 .grid-container').html(txt);
            }
          });

        },
        error: function(){
          console.log("실패");
        }
      });


    },
    section4:function(){

      $('#name').on({
        input:function(){
          let name = $('#name').val();

          if( name.length == '0' ){
            $('#section4 .name-text').css("display","block");
          }
          else {
            $('#section4 .name-text').css("display","none");
          }
        }
      });

      $('#email').on({
        input:function(){
          let email = $('#email').val();
          let reg = /\S+@\S+\.\S+/;
          // console.log( /\S+@\S+\.\S+/.test(email) );
          if( email.length == '0' ){
            $('#section4 .email-text1').css("display","block");
          }
          else {
            $('#section4 .email-text1').css("display","none");
          }

          if( reg.test(email) ){
            $('#section4 .email-text2').css("display","none");
          }
          else {
            $('#section4 .email-text2').css("display","block");
          }
        }
      });

      // 스크롤탑
      $('.top-arrow').on({
        click:function(e){
          e.preventDefault();
          $('html, body').stop().animate({ scrollTop:0 },600);
        }
      });

    },
    footer:function(){

      $(window).resize(function(){
        var winWidth = $(window).width();
        if(winWidth <= 768){
            $('#footer .container').css('display','none');
            $('#footer .mobile-container').css('display','block');
        }
        else {
          $('#footer .container').css('display','block');
          $('#footer .mobile-container').css('display','none');
        }
      });

    }
  }
  skhynix.init();

})(jQuery);