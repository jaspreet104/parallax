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

      // txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }


var stocks = [
    'stock1','stock2','stock3','stock4','stock5','stock6','stock7','stock8','stock9','stock10','stock11','stock12','stock13','stock14','stock15','stock16','stock17','stock18','stock19','stock20','stock21','stock22','stock23','stock24','stock25','stock26','stock27','stock28','stock29','stock30','stock31','stock32','stock33','stock34','stock35','stock36','stock37','stock38','stock39','stock40','stock41','stock42','stock43','stock44','stock45','stock46','stock47','stock48','stock49','stock50','stock51','stock52','stock53','stock54','stock55','stock56','stock57','stock58','stock59','stock60','stock61','stock62','stock63','stock64','stock65','stock66','stock67','stock68','stock69','stock70','stock71','stock72','stock73','stock74','stock75','stock76','stock77','stock78','stock79','stock80','stock81','stock82','stock83','stock84','stock85','stock86','stock87','stock88','stock89','stock90','stock91','stock92','stock93','stock94','stock95','stock96','stock97','stock98','stock99','stock100','stock101','stock102','stock103','stock104','stock105','stock106','stock107','stock108','stock109','stock110','stock111','stock112','stock113','stock114','stock115','stock116','stock117','stock118','stock119','stock120','stock121','stock122','stock123','stock124','stock125','stock126','stock127','stock128','stock129','stock130','stock131','stock132','stock133','stock134','stock135','stock136','stock137','stock138','stock139','stock140','stock141','stock142','stock143','stock144','stock145','stock146','stock147','stock148','stock149','stock150','stock151','stock152','stock153','stock154','stock155','stock156','stock157','stock158','stock159','stock160','stock161','stock162','stock163','stock164','stock165','stock166','stock167','stock168','stock169','stock170','stock171','stock172','stock173','stock174','stock175','stock176','stock177','stock178','stock179','stock180','stock181','stock182','stock183','stock184','stock185','stock186','stock187','stock188','stock189','stock190','stock191','stock192','stock193','stock194','stock195','stock196','stock197','stock198','stock199','stock200','stock201','stock202','stock203','stock204','stock205','stock206','stock207','stock208','stock209','stock210','stock211','stock212','stock213','stock214','stock215','stock216','stock217','stock218','stock219','stock220','stock221','stock222','stock223','stock224','stock225','stock226','stock227','stock228','stock229','stock230','stock231','stock232','stock233','stock234','stock235','stock236','stock237','stock238','stock239','stock240','stock241','stock242','stock243','stock244','stock245','stock246','stock247','stock248','stock249','stock250','stock251','stock252','stock253','stock254','stock255','stock256','stock257','stock258','stock259','stock260','stock261','stock262','stock263','stock264','stock265','stock266','stock267','stock268','stock269','stock270','stock271','stock272','stock273','stock274','stock275','stock276','stock277','stock278','stock279','stock280','stock281','stock282','stock283','stock284','stock285','stock286','stock287','stock288','stock289','stock290','stock291','stock292','stock293','stock294','stock295','stock296','stock297','stock298','stock299','stock300','stock301','stock302','stock303','stock304','stock305','stock306','stock307','stock308','stock309','stock310','stock311','stock312','stock313','stock314','stock315','stock316','stock317','stock318','stock319','stock320','stock321','stock322','stock323','stock324','stock325','stock326','stock327','stock328','stock329','stock330','stock331','stock332','stock333','stock334','stock335','stock336','stock337','stock338','stock339','stock340','stock341','stock342','stock343','stock344','stock345','stock346','stock347','stock348','stock349','stock350','stock351','stock352','stock353','stock354','stock355','stock356','stock357','stock358','stock359','stock360','stock361','stock362','stock363','stock364','stock365','stock366','stock367','stock368','stock369','stock370','stock371','stock372','stock373','stock374','stock375','stock376','stock377','stock378','stock379','stock380','stock381','stock382','stock383','stock384','stock385','stock386','stock387','stock388','stock389','stock390','stock391','stock392','stock393','stock394','stock395','stock396','stock397','stock398','stock399','stock400','stock401','stock402','stock403','stock404','stock405','stock406','stock407','stock408','stock409','stock410','stock411','stock412','stock413','stock414','stock415','stock416','stock417','stock418','stock419','stock420','stock421','stock422','stock423','stock424','stock425','stock426','stock427','stock428','stock429','stock430','stock431','stock432','stock433','stock434','stock435','stock436','stock437','stock438','stock439','stock440','stock441','stock442','stock443','stock444','stock445','stock446','stock447','stock448','stock449','stock450','stock451','stock452','stock453','stock454','stock455','stock456','stock457','stock458','stock459','stock460','stock461','stock462','stock463','stock464','stock465','stock466','stock467','stock468','stock469','stock470','stock471','stock472','stock473','stock474','stock475','stock476','stock477','stock478','stock479','stock480','stock481','stock482','stock483','stock484','stock485','stock486','stock487','stock488','stock489','stock490','stock491','stock492','stock493','stock494','stock495','stock496','stock497','stock498','stock499','stock500'
];

function createListOfStocks(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var liItem = document.createElement('li');
        liItem.style.setProperty('display', "none");

        var anchorItem = document.createElement('a');
        anchorItem.setAttribute('href', '#');

        // Set its contents:
        anchorItem.appendChild(document.createTextNode(array[i]));

        anchorItem.addEventListener("click", function(e) {
          if (e.target && e.target.matches("a")) {
            //e.target.className = "foo"; // new class name here
            //alert("clicked " + e.target.innerText);
            showChart(e.target.innerText);
          }
        });

        // liItem.appendChild(document.createTextNode(array[i]));

        liItem.appendChild(anchorItem);

        // Add it to the list:
        list.appendChild(liItem);
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

  drawChart('myChart');
  document.getElementById('myChart').removeAttribute('hidden');
}