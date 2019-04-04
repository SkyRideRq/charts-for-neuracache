const chartIsInView = el => {
	const scroll = window.scrollY || window.pageYOffset
	const boundsTop = el.getBoundingClientRect().top + scroll
	
	const viewport = {
		top: scroll,
		bottom: scroll + window.innerHeight,
	}
	
    const bounds = {
		top: boundsTop,
		bottom: boundsTop + el.clientHeight,
	}
	
	return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
		|| ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
}

var i = 0

function animate(e){
    e[i].classList.remove("animate")
    i++
}

document.addEventListener( 'DOMContentLoaded', () => {
	const tester = document.querySelector( '.container--chart' )
    const answer = document.querySelectorAll( '.percentage' )
    
    var IntervId = setInterval(
        handler = () => raf(() => {
            if (i>=11) {
                clearInterval(IntervId)
            }
            if (chartIsInView( tester )){
                animate(answer)
            }
        }
    ),500)

    handler()
    
    window.addEventListener( 'scroll', handler )
});

const raf = 
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function( callback ) {
        window.setTimeout( callback, 1000 / 60 )
    }