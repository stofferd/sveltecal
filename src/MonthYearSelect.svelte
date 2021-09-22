<script>
    // export let date;
    import { date } from './store.js'

    export const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    export const years = [2021, 2022, 2023];

    function changeMonth(newMonth) {
        const newDate = new Date( $date );
        const nextDate = new Date( newDate.setMonth(newMonth) );
        date.update(()=>nextDate);
    }
    function changeYear(newYear) {
        const newDate = new Date( $date );
        const nextDate = new Date( newDate.setFullYear( years[0] + Number(newYear) ) );
        date.update(()=>nextDate);
    }
</script>


<style>
    select {
        border: 0;
        appearance: none;
        text-align: center;
        margin: 0;
    }
    select:focus {
        outline: 0;
        border-bottom: 1px dashed #555;
    }
</style>

<div>
    <select on:change={e=>changeMonth(e.target.value)}>
    {#each months as month,i}
        <option selected={i === $date.getMonth()} value={i}>{month}</option>
    {/each}
    </select>

    <select on:change={e=>changeYear(e.target.value)}>
        {#each years as year, i}
            <option selected={year === $date.getFullYear()} value={i}>{year}</option>
        {/each}
    </select>
</div>