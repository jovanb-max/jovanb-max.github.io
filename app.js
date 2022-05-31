(function () {


    hamburger.onclick = function () { 
        this.classList.toggle('open');
        nav.classList.toggle('show');
        headline.classList.toggle('hide');
        listenbtn.classList.toggle('hide');
    }
    
    const items = document.querySelectorAll('#grid > div');
    
    for (const item of items.values()) {
        
        
        new Waypoint.Inview({
            element: item,
            enter(direction) {
                if (direction == 'down') {
                   item.classList.add('up'); 
                }
            },
            exited(direction) {
                if (direction == 'up') {
                   item.classList.remove('up'); 
                }
            }
        });
        
        
    }
    


})();
