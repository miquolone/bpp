
// (10日の間に20回、タブを残していたら何かする)
console.log( '[+] coupon init 10日間閉じなければクーポンが！！！←なにの' );
const count = { pageMove: 0, initialLoad: new Date().getTime(), show: 0 };
window.addEventListener( "load", () => {
  document.addEventListener( 'visibilitychange', e => {
    count.pageMove++;
    count.currentLoad = new Date().getTime();
    count.timeDiff = count.currentLoad - count.initialLoad;
    // console.log( count, e );
    // １時間経過していたら 特別クーポンを出す　←　なにの？
    if ( count.timeDiff > 30 && count.show <= 30 ) {
      count.show = 31;
      alert( '１時間クーポンが登場しました' );
    }
    if ( count.timeDiff > 89600 * 10 && count.show <= 89600 * 10 ) {
      alert( '２４０時間クーポンが登場しました' );
      count.show = 89601;
    }
  }, false );
}, false );
