<script>
    import { date } from './store.js';
    import Header from './Header.svelte';
    import Day from './Day.svelte';
    import ChangeMonth from './ChangeMonth.svelte';
    import MonthYearSelect from './MonthYearSelect.svelte';

    const makeArray = (length) => {
        return Array(length);
    }

    $: year = $date.getFullYear();
    $: month = $date.getMonth();
    $: numberOfDays = new Date(year, month + 1, 0).getDate();
    $: days = makeArray(numberOfDays);
    $: firstDay = new Date(year, month, 1);
    $: firstDayOfWeek = Math.max(firstDay.getDay() -1, 0);
    $: buffer = makeArray(firstDayOfWeek);
   
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
        grid-template-rows: repeat(7,50px);
        justify-content: center;
    }
    b {
        cursor: pointer;
    }
    p {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 80px;
    }
    figure {
        display: flex;
    }
    figure:before {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
		border: 1px solid #eee;
        margin-right: 8px;
    }
    figure.green:before {
        background: #00aa55;
    }
    strong {
        font-weight: normal;
    }
    @media (max-width: 639px) {
        p {
            margin-bottom: 0;
            flex-direction: column;
        }
        figure {
            margin: 6px 0;
        }
        span {
            margin: 20px auto 10px;
        }
    }
</style>

<section>
    <p>
        <figure class="green" ><strong>Green - available</strong></figure>
        <figure><strong>White - not available</strong></figure>
    </p>
    <span>
        <ChangeMonth direction={-1} />
        <MonthYearSelect />
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