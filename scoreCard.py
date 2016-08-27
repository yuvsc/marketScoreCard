# Noy's Score Card Assignment

gross_profit
total_expenses
new_offices
RnD_invesment
RnD_licenses
depreciation
shares_issued
market_share_s1
market_share_s2
net_demand
stock_outs
brand_s1
brand_s2
judge_s1
judge_s2
cum_new_offices
cum_RnD_invesment
cum_RnD_licenses
cum_depreciation
cum_net_revenues
retained_earnings
common_stock
sales_productivity
factory_productivity
net_revenues
total_assets
end_inv
production
op_capacity
debt



def financialPerf():
	# Financial Performance = Net Profit from Current Operations / Total Shares Issued 
	# Financial Performance = (Operating Profit + Investments in Firm's Future )/ Total Shares Issued 
	# Financial Performance = ((Gross Profit - Total Expenses) + 
	#                           (Cost to Open New Sales Offices and Web Centers + 
	#							R&D Investment in New Brand Features and New brands + R&D Licenses + Depreciation))/ Total Shares Issued
	return((gross_profit-total_expenses)+(new_offices+RnD_invesment+RnD_licenses+depreciation))/shares_issued 
	
def marketPerf():
	# Market Performance = (Average Market Share in Targeted Segments / 100) * (Percent of Demand Actually Served / 100) 
	# Market Performance = ((Market Share in Primary Segment + Market Share in Secondary Segment) / 2) / 100 * 
	# 							( ( Total Net Demand - Number of Stock-outs ) / Total Net Demand ) * 100) / 100 
	return (((market_share_s1+market_share_s2)/2)/100) * ((((net_demand - stock_outs)/net_demand)*100)/100)

def marketingEff():
	# Marketing Effectiveness = ( Average Brand Judgment / 100 + Average Ad Judgment / 100 ) / 2 
	# Marketing Effectiveness = ( (Highest Brand Judgment in Primary Segment + Highest Brand Judgment in Secondary Segment) / 2)/ 100 
	#								+ ( Highest Ad Judgment in Primary Segment + Highest Ad Judgment in Secondary Segment ) / 2  / 100 ) / 2 
	return ((((brand_s1+brand_s2)/2)/100) + (((judge_s1+judge_s2)/2)/100))/2

def investmentFut():
	# Investment in Future = ( Cumulative Expenses that Benefit Firm's Future / Cumulative Net Revenues ) * 10 + 1 
	# Investment in Future = ( (Cumulative Cost to Open New Sales Offices and Web Centers + 
	# 							Cumulative R&D Investment in New Brand Features and New brands + 
	#							Cumulative R&D Licenses + Cumulative Depreciation) / Cumulative Net Revenues ) * 10 + 1 
	return ((cum_new_offices+cum_RnD_invesment+cum_RnD_licenses+cum_depreciation)/cum_net_revenues)*10 + 1

def wealth():
	# Wealth = Net Equity / Total Stockholders Equity
	# Wealth = (Retained Earnings + Common Stock) / Common Stock
	return (retained_earnings+common_stock)/common_stock

def human():
	# ( Sales Force Productivity / 100 + Factory Worker Productivity / 100 ) / 2 
	return ((sales_productivity/100)+(factory_productivity/100))/2

def asset():
	# Asset Management = Asset Turnover * Penalty for Excess Inventory 
	# Asset Management = (Net Revenues / Total Assets) * (1 - Ending Inventory / Production)
	return (net_revenues / total_assets) * (1-(end_inv/production))
	
def manufacturing():
	# Manufacturing Productivity = ( Percent of Operating Capacity Used in Production / 100 ) 
	return op_capacity/100
	
def risk():
	# Financial Risk = ( Total Equity / Total Capital ) ^ 0.5 
	# Financial Risk = ( (Common Stock + Retained Earnings) / (Common Stock + Retained Earnings + Debt) ) ^ 0.5 
	return ((common_stock+retained_earnings)/(common_stock+retained_earnings+debt))^0.5

def totalPerf():
	# Total Performance = Financial Performance * Market Performance * Marketing Effectiveness * 
	#						Investment in Future * Wealth * Human Resource Management * Asset Management * 
	#						Manufacturing Productivity * Financial Risk 
	return financialPerf()*marketPerf()*marketingEff()*investmentFut()*wealth()*human()*asset()*manufacturing()*risk()
