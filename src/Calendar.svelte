<script>
    import { date } from './store.js';
    import Header from './Header.svelte';
    import Day from './Day.svelte';
    import ChangeMonth from './ChangeMonth.svelte';
 
    $: year = $date.getFullYear();
    $: month = $date.getMonth();
    $: numberOfDays = new Date(year, month + 1, 0).getDate();
    $: days = Array(numberOfDays);
    $: firstDay = new Date(year, month, 1);
    $: firstDayOfWeek = firstDay.getDay() -1;
    $: buffer = Array(firstDayOfWeek);

    function resetDate() {
        const newDate = new Date();
        date.update(()=>newDate);
    }
    function getDateObject(i) {
       return new Date( year, month, i + 1);
    }
    function getDateOfMonth(dateObj) {
       const dateOfMonth = String(dateObj.getDate());
       return dateOfMonth.length === 1 ? `0${dateOfMonth}`:dateOfMonth
    }
    function getNiceMonth(month) {
        const m = String(month + 1);
        return m.length === 1 ? `0${m}`:m
    }

  
</script>

<style>
    span {
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        max-width: 305px;
        margin: 20px auto 70px;
        align-items: center;
       
    }
    div {  
        display: grid;
        grid-template-columns: repeat(7,50px);
        grid-template-rows: repeat(8,50px);
        justify-content: center;
    }
    b {
        cursor: pointer;
    }
</style>

<section>
    <span>
        <ChangeMonth direction={-1} />
        {$date.toLocaleString('default', { month: 'long' })} { $date.getFullYear() } 
        <ChangeMonth direction={1} />
    </span>

    <div>
        <Header />
        {#each buffer as buff}
            <span>&nbsp;</span>
        {/each}
        {#each days as day, i}
            <Day year={year} month={month} date={getDateObject(i)} niceDate={`${getDateOfMonth(getDateObject(i))}-${getNiceMonth(month)}-${year}`} />
        {/each}
    </div>

</section>
<b on:mouseup={resetDate}>Today</b>