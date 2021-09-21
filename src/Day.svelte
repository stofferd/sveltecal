<script>
    import { availability } from './store.js';
    console.log({availability});
    export let date; 
    export let month; 
    export let year; 
    export let niceDate; 

    let today = new Date();
    $: isToday = date.getDate() === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()

    $: isAvailable = $availability.includes(niceDate);
    


</script>

<style>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.today {
        font-weight: bold;
		color: #fff;
        background: #333;
        border-right: 1px solid #fff;
    }
    div.available {
        background: #00aa55;
        color: #fff;

    }
</style>

<div title={niceDate} class={`${isToday ? "today": ''}${isAvailable ? ' available' : ''}`}>{date.getDate()}</div>