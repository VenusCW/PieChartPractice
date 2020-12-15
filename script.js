const foodEntries =document.querySelector("FoodTransaction-input");
const billEntries =document.querySelector("billsTransaction-input");
const entertainmentEntries =document.querySelector("entertainmentTransactionsInput");
const clothingEntries =document.querySelector("clothingTransactionInput");
const ctx = document.getElementById("PieChart").getContext("2d");
let PieChart = new CharacterData(ctx,{
    type: 'pie',
    data:{
        labels: ['Food Purchases','Bill Purchases','Entertainment Purchases', 'Clothing Purchases'],
        datasets: [{
            label:'BudgetAppPieChart',
            data: [0,0,0,0],
            backgroundColor:[#ff766b,blue,orange,yellow],
            borderWidth: 1
        }
    ]
    }
});
const updateChartValue=(input,dataOrder)=>{
    input.addEventListner('change', e =>{
        PieChart.data.datasets[0].data[dataOrder]=e.target.value;
        PieChart.update();
}); 
};
updateChartValue(FoodTransaction-input,0);
updateChartValue(billsTransaction-input,1);
updateChartValue(entertinmentTransactionInput,2);
updateChartValue(clothingTransactionInput,3);