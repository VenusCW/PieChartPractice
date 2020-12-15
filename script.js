const foodEntries =document.querySelector('.FoodTransaction-input');//THINK WE NEED TIFFANY'S INPUT HERE
const billEntries =document.querySelector('.billsTransaction-input');
const entertainmentEntries =document.querySelector('.entertainmentTransactionsInput');
const clothingEntries =document.querySelector('.clothingTransactionInput');
const ctx = document.getElementById('PieChart').getContext('2d');//CREATES 2D CANVAS
let pieChart = new Chart(ctx,{
    type: 'pie',
    data:{

        labels: ['Food Purchases','Bill Purchases','Entertainment Purchases', 'Clothing Purchases'],
        datasets: [
            {

                label:'BudgetAppPieChart',
                data: [0,0,0,0],
                backgroundColor:['#ff766b','#dd3b79','#2adece','#eeeeee'],
                borderWidth: 1,
            }
        ]

    }
});


const updateChartValue=(input,dataOrder)=>{
    input.addEventListener("change", e =>{
      PieChart.data.datasets[0].data[dataOrder] = e.target.value;
      PieChart.update();
    }); 
};
updateChartValue(foodEntries,0);
updateChartValue(billEntries,1);
updateChartValue(entertainmentEntries,2);
updateChartValue(clothingEntries,3);