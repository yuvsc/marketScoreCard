function main(){
    var gross_profit = document.getElementsByName("gross_profit")[0].value;
    var total_expenses = document.getElementsByName("total_expenses")[0].value;
	var new_offices = document.getElementsByName("new_offices")[0].value;
	var RnD_invesment = document.getElementsByName("RnD_invesment")[0].value;
	var RnD_licenses = document.getElementsByName("RnD_licenses")[0].value;
	var depreciation = document.getElementsByName("depreciation")[0].value;
	var shares_issued = document.getElementsByName("shares_issued")[0].value;
	var market_share_s1 = document.getElementsByName("market_share_s1")[0].value;
	var market_share_s2 = document.getElementsByName("market_share_s2")[0].value;
	var net_demand = document.getElementsByName("net_demand")[0].value;
	var stock_outs = document.getElementsByName("stock_outs")[0].value;
	var brand_s1 = document.getElementsByName("brand_s1")[0].value;
	var brand_s2 = document.getElementsByName("brand_s2")[0].value;
	var judge_s1 = document.getElementsByName("judge_s1")[0].value;
	var judge_s2 = document.getElementsByName("judge_s2")[0].value;
	var cum_new_offices = document.getElementsByName("cum_new_offices")[0].value;
	var cum_RnD_invesment = document.getElementsByName("cum_RnD_invesment")[0].value;
	var cum_RnD_licenses = document.getElementsByName("cum_RnD_licenses")[0].value;
	var cum_depreciation = document.getElementsByName("cum_depreciation")[0].value;
	var cum_net_revenues = document.getElementsByName("cum_net_revenues")[0].value;
	var retained_earnings = document.getElementsByName("retained_earnings")[0].value;
	var common_stock = document.getElementsByName("common_stock")[0].value;
	var sales_productivity = document.getElementsByName("sales_productivity")[0].value;
	var factory_productivity = document.getElementsByName("factory_productivity")[0].value;
	var net_revenues = document.getElementsByName("net_revenues")[0].value;
	var total_assets = document.getElementsByName("total_assets")[0].value;
	var end_inv = document.getElementsByName("end_inv")[0].value;
	var production = document.getElementsByName("production")[0].value;
	var op_capacity = document.getElementsByName("op_capacity")[0].value;
	var debt = document.getElementsByName("debt")[0].value;
	
	alert(firstName);
	displayResults();
}

function displayResults(){
	var table = document.getElementById("resultTable");
	
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "Total Performance";
	cell2.innerHTML = totalPerf();
	cell3.innerHTML = "c";
	
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "Financial Performance";
	cell2.innerHTML = financialPerf();
	cell3.innerHTML = "g";
	
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "Market Performance";
	cell2.innerHTML = marketPerf();
	cell3.innerHTML = "g";
	
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "Marketing Effectiveness";
	cell2.innerHTML = marketingEff();
	cell3.innerHTML = "g";
	
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "Investment in Future";
	cell2.innerHTML = investmentFut();
	cell3.innerHTML = "g";
	
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "Wealth";
	cell2.innerHTML = wealth();
	cell3.innerHTML = "g";
	
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "Human Resource Management";
	cell2.innerHTML = human();
	cell3.innerHTML = "g";
	
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "Asset Management";
	cell2.innerHTML = asset();
	cell3.innerHTML = "g";
	
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "Manufacturing Productivity";
	cell2.innerHTML = manufacturing();
	cell3.innerHTML = "g";
	
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "Financial Risk";
	cell2.innerHTML = risk();
	cell3.innerHTML = "g";
	
}

// Noy's Score Card Assignment

function financialPerf(){
	// Financial Performance = Net Profit from Current Operations / Total Shares Issued 
	// Financial Performance = (Operating Profit + Investments in Firm's Future )/ Total Shares Issued 
	// Financial Performance = ((Gross Profit - Total Expenses) + 
	//                           (Cost to Open New Sales Offices and Web Centers + 
	//							R&D Investment in New Brand Features and New brands + R&D Licenses + Depreciation))/ Total Shares Issued
	return((gross_profit-total_expenses)+(new_offices+RnD_invesment+RnD_licenses+depreciation))/shares_issued;
}	
	
function marketPerf(){
	// Market Performance = (Average Market Share in Targeted Segments / 100) * (Percent of Demand Actually Served / 100) 
	// Market Performance = ((Market Share in Primary Segment + Market Share in Secondary Segment) / 2) / 100 * 
	// 							( ( Total Net Demand - Number of Stock-outs ) / Total Net Demand ) * 100) / 100 
	return (((market_share_s1+market_share_s2)/2)/100) * ((((net_demand - stock_outs)/net_demand)*100)/100);
}
	
function marketingEff(){
	// Marketing Effectiveness = ( Average Brand Judgment / 100 + Average Ad Judgment / 100 ) / 2 
	// Marketing Effectiveness = ( (Highest Brand Judgment in Primary Segment + Highest Brand Judgment in Secondary Segment) / 2)/ 100 
	//								+ ( Highest Ad Judgment in Primary Segment + Highest Ad Judgment in Secondary Segment ) / 2  / 100 ) / 2 
	return ((((brand_s1+brand_s2)/2)/100) + (((judge_s1+judge_s2)/2)/100))/2;
}
	
function investmentFut(){
	// Investment in Future = ( Cumulative Expenses that Benefit Firm's Future / Cumulative Net Revenues ) * 10 + 1 
	// Investment in Future = ( (Cumulative Cost to Open New Sales Offices and Web Centers + 
	// 							Cumulative R&D Investment in New Brand Features and New brands + 
	//							Cumulative R&D Licenses + Cumulative Depreciation) / Cumulative Net Revenues ) * 10 + 1 
	return ((cum_new_offices+cum_RnD_invesment+cum_RnD_licenses+cum_depreciation)/cum_net_revenues)*10 + 1;
}
	
function wealth(){
	// Wealth = Net Equity / Total Stockholders Equity
	// Wealth = (Retained Earnings + Common Stock) / Common Stock
	return (retained_earnings+common_stock)/common_stock;
}
	
function human(){
	// ( Sales Force Productivity / 100 + Factory Worker Productivity / 100 ) / 2 
	return ((sales_productivity/100)+(factory_productivity/100))/2;
}
	
function asset(){
	// Asset Management = Asset Turnover * Penalty for Excess Inventory 
	// Asset Management = (Net Revenues / Total Assets) * (1 - Ending Inventory / Production)
	return (net_revenues / total_assets) * (1-(end_inv/production));
}
	
function manufacturing(){
	// Manufacturing Productivity = ( Percent of Operating Capacity Used in Production / 100 ) 
	return op_capacity/100;
}
	
function risk(){
	// Financial Risk = ( Total Equity / Total Capital ) ^ 0.5 
	// Financial Risk = ( (Common Stock + Retained Earnings) / (Common Stock + Retained Earnings + Debt) ) ^ 0.5 
	return ((common_stock+retained_earnings)/(common_stock+retained_earnings+debt))^0.5;
}
	
function totalPerf(){
	// Total Performance = Financial Performance * Market Performance * Marketing Effectiveness * 
	//						Investment in Future * Wealth * Human Resource Management * Asset Management * 
	//						Manufacturing Productivity * Financial Risk 
	return financialPerf()*marketPerf()*marketingEff()*investmentFut()*wealth()*human()*asset()*manufacturing()*risk();
}
