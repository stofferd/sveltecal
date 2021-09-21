<script>
    import { date } from './store.js';
    export let direction;
    export let directionName = direction === 1 ? 'next' : 'prev'

    function changeMonth(direction) {
        const newDate = new Date( $date );
        const nextDate = new Date( newDate.setMonth(newDate.getMonth() + direction) );
        date.update(()=>nextDate);
    }

</script>

<style>
    div {
        cursor: pointer; 
    }
    div:before {
        content: "";
        border-left: 2px solid #333;
        border-top: 2px solid #333;
        width: 16px;
        height: 16px;
        display: block;
        transform: rotate(135deg);
    }
    div.prev:before {
        transform: rotate(315deg);

    }

</style>

<div title={directionName} class={directionName} on:mouseup={changeMonth(direction)}></div>