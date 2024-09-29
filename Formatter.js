export function generateCSVData(geomaterials, selectedFunction) {
	  let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // \uFEFF 是为了确保 Excel 正确识别 UTF-8 编码的文件头
	  if(selectedFunction === 'contains' || 
        selectedFunction === 'notContains' || 
        selectedFunction === 'containAllButNot' || 
        selectedFunction === 'containOnlyElems'){
	  csvContent += "name,mindat_formula,elements\n"; // CSV头
	
	  geomaterials.forEach(material => {
	    let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
	    // let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号
	    let mindat_formula = material.mindat_formula ? `"${material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}"` : '';

	    // 将化学元素部分保留在一个单元格中
	    let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
	
	    let row = `${name},${mindat_formula},${elements}`;
	    csvContent += row + "\n";
	  });
	}	else if(selectedFunction === 'hardnessGT' || selectedFunction === 'hardnessLT' || selectedFunction ==='hardnessRange'){
		csvContent += "name,hmin,hmax\n";
		geomaterials.forEach(material => {
		  let name = material.name.replace(/,/g, '');
		  let hmin = material.hmin || '';
		  let hmax = material.hmax || '';
		  let row = `${name},${hmin},${hmax}`;
		  csvContent += row + "\n";
		});
	}   else if(selectedFunction === 'densGT' || selectedFunction === 'densLT' || selectedFunction ==='densRange'){
		csvContent += "name,dmeas,dmeas2\n";
		geomaterials.forEach(material => {
		  let name = material.name.replace(/,/g, '');
		  let dmeas = material.dmeas || '';
		  let dmeas2 = material.dmeas2 || '';
		  let row = `${name},${dmeas},${dmeas2}`;
		  csvContent += row + "\n";
		});
	}
	else if(selectedFunction ==='optical2vRange'){
		csvContent += "name,optical2vmeasured,optical2vmeasured2\n";
		geomaterials.forEach(material => {
		  let name = material.name.replace(/,/g, '');
		  let optical2vmeasured = material.optical2vmeasured || '';
		  let optical2vmeasured2 = material.optical2vmeasured2 || '';
		  let row = `${name},${optical2vmeasured},${optical2vmeasured2}`;
		  csvContent += row + "\n";
		});
	}
	else if(selectedFunction === 'csystem'){
	  csvContent += "name,elements,csystem,commentcrystal\n"; // CSV头
	
	  geomaterials.forEach(material => {
	    let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
	    // let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号
	
	    // 将化学元素部分保留在一个单元格中
	    let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
		let csystem =  material.csystem || '';
		let commentcrystal = material.commentcrystal ? `"${material.commentcrystal.replace(/\n/g, ' ').trim()}"` : ''; // 替换双引号和换行符
	    let row = `${name},${elements},${csystem},${commentcrystal}`;
		csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'fracturetype'){
	  csvContent += "name,elements,csystem,cleavagetype,fracturetype\n"; // CSV头
	
	  geomaterials.forEach(material => {
	    let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
	    // let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号
	
	    // 将化学元素部分保留在一个单元格中
	    let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
		let csystem =  material.csystem || '';
		let cleavagetype =  material.cleavagetype || '';
		let fracturetype = material.fracturetype ? `"${material.fracturetype.replace(/\n/g, ' ')}"` : ''; // 替换双引号和换行符
	    let row = `${name},${elements},${csystem},${cleavagetype},${fracturetype}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'colour'){
	  csvContent += "name,elements,csystem,colour\n"; // CSV头
	
	  geomaterials.forEach(material => {
	    let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
	    // let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号
	
	    // 将化学元素部分保留在一个单元格中
	    let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
		let csystem =  material.csystem || '';
		let colour = material.colour ? `"${material.colour.replace(/"/g, '""').replace(/\n/g, ' ')}"` : ''; // 替换双引号和换行符
	    let row = `${name},${elements},${csystem},${colour}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'streak'){
	  csvContent += "name,elements,csystem,colour,streak\n"; // CSV头
	
	  geomaterials.forEach(material => {
	    let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
	    // let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号
	
	    // 将化学元素部分保留在一个单元格中
	    let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
		let csystem =  material.csystem || '';
		let colour = material.colour ? `"${material.colour.replace(/"/g, '""').replace(/\n/g, ' ')}"` : ''; // 替换双引号和换行符
		let streak = material.streak ? `"${material.streak.replace(/"/g, '""').replace(/\n/g, ' ')}"` : '';
	    let row = `${name},${elements},${csystem},${colour},${streak}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'diapheny'){
	  csvContent += "name,elements,csystem,colour,diapheny\n"; // CSV头
	
	  geomaterials.forEach(material => {
	    let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
	    // let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号
	
	    // 将化学元素部分保留在一个单元格中
	    let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
		let csystem =  material.csystem || '';
		let colour = material.colour ? `"${material.colour.replace(/"/g, '""').replace(/\n/g, ' ')}"` : ''; // 替换双引号和换行符
		let diapheny = material.diapheny ? `"${material.diapheny.replace(/"/g, '""').replace(/\n/g, ' ')}"` : '';
	    let row = `${name},${elements},${csystem},${colour},${diapheny}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'lustretype'){
	  csvContent += "name,elements,csystem,lustre,lustretype\n"; // CSV头
	
	  geomaterials.forEach(material => {
	    let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
	    // let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号
	
	    // 将化学元素部分保留在一个单元格中
	    let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
		let csystem =  material.csystem || '';
		let lustre = material.lustre ? `"${material.lustre.replace(/"/g, '""').replace(/\n/g, ' ')}"` : ''; // 替换双引号和换行符
		let lustretype = material.lustretype ? `"${material.lustretype.replace(/"/g, '""').replace(/\n/g, ' ')}"` : '';
	    let row = `${name},${elements},${csystem},${lustre},${lustretype}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'opticalsign'){
	  csvContent += "name,elements,colour,csystem,opticalsign\n"; // CSV头
	
	  geomaterials.forEach(material => {
	    let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
	    // let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号
	
	    // 将化学元素部分保留在一个单元格中
	    let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
		let colour = material.colour ? `"${material.colour.replace(/\n/g, ' ')}"` : ''; // 替换双引号和换行符
		let csystem =  material.csystem || '';
		let opticalsign = material.opticalsign ? `"${material.opticalsign.replace(/\n/g, ' ')}"` : '';
	    let row = `${name},${elements},${colour},${csystem},${opticalsign}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'polytypeof'){
	  csvContent += "name,elements,csystem,opticalbireflectance,polytypeof\n"; // CSV头
	
	  geomaterials.forEach(material => {
	    let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
	    // let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号
	
	    // 将化学元素部分保留在一个单元格中
	    let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
		let csystem =  material.csystem || '';
		let opticalbireflectance = material.opticalbireflectance ? `"${material.opticalbireflectance.replace(/"/g, '""').replace(/\n/g, ' ')}"` : ''; // 替换双引号和换行符
		let polytypeof = material.polytypeof
	    let row = `${name},${elements},${csystem},${opticalbireflectance},${polytypeof}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'cleavagetype'){
	  csvContent += "name,elements,csystem,cleavage,cleavagetype\n"; // CSV头
	
	  geomaterials.forEach(material => {
	    let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
	    // let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号
	
	    // 将化学元素部分保留在一个单元格中
	    let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
		let csystem =  material.csystem || '';
		let cleavage = material.cleavage ? `"${material.cleavage.replace(/"/g, '""').replace(/\n/g, ' ').trim()}"` : ''; // 替换双引号和换行符
		let cleavagetype = material.cleavagetype ? `"${material.cleavagetype.replace(/\n/g, ' ').trim()}"` : '';
	    let row = `${name},${elements},${csystem},${cleavage},${cleavagetype}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'name' || selectedFunction === 'q' || selectedFunction === 'id' ){
	  csvContent += "id,name\n"; // CSV头
	
	  geomaterials.forEach(material => {
		let id =  material.id || '';
	    let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
	    let row = `${id},${name}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'varietyof' ){
	  csvContent += "id,name,varietyof\n"; // CSV头
	
	  geomaterials.forEach(material => {
		let id =  material.id || '';
	    let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
		let varietyof =  material.varietyof || '';
	    let row = `${id},${name},${varietyof}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'entrytype' ){
	  csvContent += "id,name,entrytype\n"; // CSV头
	
	  geomaterials.forEach(material => {
		let id =  material.id || '';
	    let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
		let entrytype =  material.entrytype;
	    let row = `${id},${name},${entrytype}`;
	    csvContent += row + "\n";
	  });
	}
	  if(selectedFunction === 'retrievedbycombined'){
	  csvContent += "id,name,elements,hmin,hmax,csystem,ima_status,entrytype\n"; // CSV头
	
	  geomaterials.forEach(material => {
		let id =  material.id || '';  
	    let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
	    // let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号
	    // let mindat_formula = material.mindat_formula ? `"${material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}"` : '';
	    // // 将化学元素部分保留在一个单元格中
	    let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
		let hmin =  material.hmin || '';  
		let hmax =  material.hmax || '';  
		let csystem =  material.csystem || '';
		let ima_status= `"${material.ima_status.join(',')}"`;
		let entrytype =  material.entrytype;
	    let row = `${id},${name},${elements},${hmin},${hmax},${csystem},${ima_status},${entrytype}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'countrylist' || selectedFunction === 'localitiesid' ){
	  csvContent += "id,country,elements,latitude,longitude,level,txt\n"; // CSV头
	
	  geomaterials.forEach(material => {
		let id =  material.id;
	    let country = material.country; // 去除名称中的逗号，以免干扰表格格式
	    let elements = material.elements; // 去除名称中的逗号，以免干扰表格格式
	    let latitude = material.latitude; // 去除名称中的逗号，以免干扰表格格式
		let longitude = material.longitude; // 去除名称中的逗号，以免干扰表格格式
		let level = material.level; // 去除名称中的逗号，以免干扰表格格式
		let txt = material.txt ? `"${material.txt.replace(/\n/g, ' ').trim()}"` : ''; // 替换双引号和换行符
	    let row = `${id},${country},${elements},${latitude},${longitude},${level},${txt}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'description' ){
	  csvContent += "id,country,elements,latitude,longitude,level,description_short\n"; // CSV头
	
	  geomaterials.forEach(material => {
		let id =  material.id;
	    let country = material.country; 
	    let elements = material.elements; 
	    let latitude = material.latitude; 
		let longitude = material.longitude; 
		let level = material.level; 
		let description_short = material.description_short ? `"${material.description_short.replace(/"/g, '""').replace(/\n/g, ' ').trim()}"` : ''; // 替换双引号和换行符
	    let row = `${id},${country},${elements},${latitude},${longitude},${level},${description_short}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'localitiesElementsInc' || selectedFunction === 'localitiesElementsExc' || selectedFunction === 'localitiesElementsIncExc' ){
	  csvContent += "id,country,elements,latitude,longitude,level,txt\n"; // CSV头
	
	  geomaterials.forEach(material => {
		let id =  material.id;
	    let country = material.country; 
	    let elements = material.elements; 
	    let latitude = material.latitude; 
		let longitude = material.longitude; 
		let level = material.level; 
		let txt = material.txt ? `"${material.txt.replace(/"/g, '""').replace(/\n/g, ' ').trim()}"` : ''; // 替换双引号和换行符
	    let row = `${id},${country},${elements},${latitude},${longitude},${level},${txt}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'localitiesAge'){
	  csvContent += "age_id,age_mav,age_ma2v,agemethod\n"; // CSV头
	
	  geomaterials.forEach(material => {
		let age_id =  material.age_id;
	    let age_mav = material.age_mav; 
	    let age_ma2v = material.age_ma2v; 
		let agemethod = material.agemethod ? `"${material.agemethod.replace(/"/g, '""').replace(/\n/g, ' ').trim()}"` : ''; // 替换双引号和换行符
	    let row = `${age_id},${age_mav},${age_ma2v},${agemethod}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'mineralsImaList'){
	  csvContent += "name,type_localities,ima_formula,ima_status\n"; // CSV头
	
	  geomaterials.forEach(material => {
		let name =  material.name;
		let type_localities= `"${material.type_localities.join(',')}"`;
		let ima_formula = material.ima_formula ? `"${material.ima_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}"` : '';
		let ima_status= `"${material.ima_status.join(',')}"`;
	    let row = `${name},${type_localities},${ima_formula},${ima_status}`;
	    csvContent += row + "\n";
	  });
	}
	else if(selectedFunction === 'mineralsImaRetrieve'){
	  csvContent += "id,name,mindat_formula,ima_status,elements,sigelements\n"; // CSV头
	
	  geomaterials.forEach(material => {
		let id =  material.id;
		let name =  material.name;
		let mindat_formula = material.mindat_formula ? `"${material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}"` : '';
		let ima_status= `"${material.ima_status.join(',')}"`;
		let elements= `"${material.elements.join(',')}"`;
		let sigelements= `"${material.sigelements.join(',')}"`;
	    let row = `${id},${name},${mindat_formula},${ima_status},${elements},${sigelements}`;
	    csvContent += row + "\n";
	  });
	}
	  return encodeURI(csvContent);
	}
	
	