function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    if (filter == "") {
        ul.setAttribute('hidden', "true");
        return;
    } else {
        ul.removeAttribute('hidden');
    }

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }


var stocks = [
  '	ADANIENT.NS	Adani Enterprises Limited	'	,
'	ADANIGREEN.NS	Adani Green Energy Limited	'	,
'	ADANIPORTS.NS	Adani Ports and Special Economic Zone Limited	'	,
'	ADANITRANS.NS	Adani Transmission Limited	'	,
'	ASIANPAINT.BO	Asian Paints Limited	'	,
'	ASIANPAINT.NS	Asian Paints Limited	'	,
'	ATGL.NS	Adani Total Gas Limited	'	,
'	AXISBANK.BO	Axis Bank Limited	'	,
'	AXISBANK.NS	Axis Bank Limited	'	,
'	BAJAJ-AUTO.BO	Bajaj Auto Limited	'	,
'	BAJAJ-AUTO.NS	Bajaj Auto Limited	'	,
'	BAJAJFINSV.BO	Bajaj Finserv Limited	'	,
'	BAJAJFINSV.NS	Bajaj Finserv Ltd.	'	,
'	BAJFINANCE.BO	Bajaj Finance Limited	'	,
'	BAJFINANCE.NS	Bajaj Finance Limited	'	,
'	BERGEPAINT.NS	Berger Paints India Limited	'	,
'	BHARTIARTL.BO	Bharti Airtel Limited	'	,
'	BHARTIARTL.NS	Bharti Airtel Limited	'	,
'	BPCL.NS	Bharat Petroleum Corporation Limited	'	,
'	BRITANNIA.BO	Britannia Industries Limited	'	,
'	BRITANNIA.NS	Britannia Industries Limited	'	,
'	CIPLA.NS	Cipla Limited	'	,
'	COALINDIA.NS	Coal India Limited	'	,
'	DABUR.BO	Dabur India Limited	'	,
'	DABUR.NS	Dabur India Limited	'	,
'	DIVISLAB.BO	Divi\'s Laboratories Limited	'	,
'	DIVISLAB.NS	Divi\'s Laboratories Limited	'	,
'	DLF.NS	DLF Limited	'	,
'	DMART.BO	Avenue Supermarts Limited	'	,
'	DMART.NS	Avenue Supermarts Limited	'	,
'	DRREDDY.BO	Dr. Reddy\'s Laboratories Limited	'	,
'	DRREDDY.NS	Dr. Reddy\'s Laboratories Limited	'	,
'	GODREJCP.NS	Godrej Consumer Products Limited	'	,
'	GRASIM.NS	Grasim Industries Limited	'	,
'	HCLTECH.BO	HCL Technologies Limited	'	,
'	HCLTECH.NS	HCL Technologies Limited	'	,
'	HDFC.BO	Housing Development Finance Corporation Limited	'	,
'	HDFC.NS	Housing Development Finance Corporation Limited	'	,
'	HDFCBANK.BO	HDFC Bank Limited	'	,
'	HDFCBANK.NS	HDFC Bank Limited	'	,
'	HDFCLIFE.BO	HDFC Life Insurance Company Limited	'	,
'	HDFCLIFE.NS	HDFC Life Insurance Company Limited	'	,
'	HINDALCO.NS	Hindalco Industries Limited	'	,
'	HINDUNILVR.BO	Hindustan Unilever Limited	'	,
'	HINDUNILVR.NS	Hindustan Unilever Limited	'	,
'	HINDZINC.BO	Hindustan Zinc Limited	'	,
'	HINDZINC.NS	Hindustan Zinc Limited	'	,
'	ICICIBANK.BO	ICICI Bank Limited	'	,
'	ICICIBANK.NS	ICICI Bank Limited	'	,
'	ICICIPRULI.NS	ICICI Prudential Life Insurance Company Limited	'	,
'	INDUSINDBK.NS	IndusInd Bank Limited	'	,
'	INFY.BO	Infosys Limited	'	,
'	INFY.NS	Infosys Limited	'	,
'	IOC.NS	Indian Oil Corporation Limited	'	,
'	ITC.BO	ITC Limited	'	,
'	ITC.NS	ITC Limited	'	,
'	JSWSTEEL.NS	JSW Steel Limited	'	,
'	KOTAKBANK.BO	Kotak Mahindra Bank Limited	'	,
'	KOTAKBANK.NS	Kotak Mahindra Bank Limited	'	,
'	LT.BO	Larsen & Toubro Limited	'	,
'	LT.NS	Larsen & Toubro Limited	'	,
'	M&M.BO	Mahindra & Mahindra Limited	'	,
'	M&M.NS	Mahindra & Mahindra Limited	'	,
'	MARUTI.BO	Maruti Suzuki India Limited	'	,
'	MARUTI.NS	Maruti Suzuki India Limited	'	,
'	MOTHERSUMI.NS	Motherson Sumi Systems Limited	'	,
'	NESTLEIND.BO	Nestlé India Limited	'	,
'	NESTLEIND.NS	Nestlé India Limited	'	,
'	NTPC.BO	NTPC Limited	'	,
'	NTPC.NS	NTPC Limited	'	,
'	ONGC.BO	Oil and Natural Gas Corporation Limited	'	,
'	ONGC.NS	Oil and Natural Gas Corporation Limited	'	,
'	PIDILITIND.BO	Pidilite Industries Limited	'	,
'	PIDILITIND.NS	Pidilite Industries Limited	'	,
'	POWERGRID.BO	Power Grid Corporation of India Limited	'	,
'	POWERGRID.NS	Power Grid Corporation of India Limited	'	,
'	RELIANCE.BO	Reliance Industries Limited	'	,
'	RELIANCE.NS	Reliance Industries Limited	'	,
'	SBICARD.NS	SBI Cards and Payment Services Limited	'	,
'	SBILIFE.BO	SBI Life Insurance Company Limited	'	,
'	SBILIFE.NS	SBI Life Insurance Company Limited	'	,
'	SBIN.BO	State Bank of India	'	,
'	SBIN.NS	State Bank of India	'	,
'	SHREECEM.NS	Shree Cement Limited	'	,
'	SUNPHARMA.BO	Sun Pharmaceutical Industries Limited	'	,
'	SUNPHARMA.NS	Sun Pharmaceutical Industries Limited	'	,
'	TATAMOTORS.NS	Tata Motors Limited	'	,
'	TATAMTRDVR.NS	Tata Motors Limited	'	,
'	TATASTEEL.NS	Tata Steel Limited	'	,
'	TCS.BO	Tata Consultancy Services Limited	'	,
'	TCS.NS	Tata Consultancy Services Limited	'	,
'	TECHM.BO	Tech Mahindra Limited	'	,
'	TECHM.NS	Tech Mahindra Limited	'	,
'	TITAN.BO	Titan Company Limited	'	,
'	TITAN.NS	Titan Company Limited	'	,
'	ULTRACEMCO.BO	UltraTech Cement Limited	'	,
'	ULTRACEMCO.NS	UltraTech Cement Limited	'	,
'	VEDL.NS	Vedanta Limited	'	,
'	WIPRO.BO	Wipro Limited	'	,
'	WIPRO.NS	Wipro Limited	'	,
];

function createListOfStocks(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');        

        var anchorItem = document.createElement('a');
        anchorItem.setAttribute('href', '#');

        // Set its contents:
        anchorItem.appendChild(document.createTextNode(array[i]));

        item.appendChild(anchorItem);

        anchorItem.addEventListener("click", function(e) {
          if (e.target && e.target.matches("a")) {
            //e.target.className = "foo"; // new class name here
            //alert("clicked " + e.target.innerText);
            showChart(e.target.innerText);
          }
        });

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

function showChart(str) {
  var input, ul;
  input = document.getElementById('myInput');
  input.value = '';

  ul = document.getElementById("myUL");
  ul.setAttribute('hidden', "true");
 
  drawChart1('myChart1', str);
  document.getElementById('myChart1').removeAttribute('hidden');
}