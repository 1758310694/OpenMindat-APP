export function generateCSVData(geomaterials, selectedFunction) {
	let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // \uFEFF 是为了确保 Excel 正确识别 UTF-8 编码的文件头
	if (selectedFunction === 'contains' ||
		selectedFunction === 'notContains' ||
		selectedFunction === 'containAllButNot' ||
		selectedFunction === 'containOnlyElems') {
		csvContent += "name,mindat_formula,elements\n"; // CSV头

		geomaterials.forEach(material => {
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			// let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号
			let mindat_formula = material.mindat_formula ?
				`"${material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}"` : '';

			// 将化学元素部分保留在一个单元格中
			let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中

			let row = `${name},${mindat_formula},${elements}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'hardnessGT' || selectedFunction === 'hardnessLT' || selectedFunction ===
		'hardnessRange') {
		csvContent += "name,hmin,hmax\n";
		geomaterials.forEach(material => {
			let name = material.name.replace(/,/g, '');
			let hmin = material.hmin || '';
			let hmax = material.hmax || '';
			let row = `${name},${hmin},${hmax}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'densGT' || selectedFunction === 'densLT' || selectedFunction === 'densRange') {
		csvContent += "name,dmeas,dmeas2\n";
		geomaterials.forEach(material => {
			let name = material.name.replace(/,/g, '');
			let dmeas = material.dmeas || '';
			let dmeas2 = material.dmeas2 || '';
			let row = `${name},${dmeas},${dmeas2}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'optical2vRange') {
		csvContent += "name,optical2vmeasured,optical2vmeasured2\n";
		geomaterials.forEach(material => {
			let name = material.name.replace(/,/g, '');
			let optical2vmeasured = material.optical2vmeasured || '';
			let optical2vmeasured2 = material.optical2vmeasured2 || '';
			let row = `${name},${optical2vmeasured},${optical2vmeasured2}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'csystem') {
		csvContent += "name,elements,csystem,commentcrystal\n"; // CSV头

		geomaterials.forEach(material => {
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			// let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号

			// 将化学元素部分保留在一个单元格中
			let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
			let csystem = material.csystem || '';
			let commentcrystal = material.commentcrystal ?
				`"${material.commentcrystal.replace(/\n/g, ' ').trim()}"` : ''; // 替换双引号和换行符
			let row = `${name},${elements},${csystem},${commentcrystal}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'fracturetype') {
		csvContent += "name,elements,csystem,cleavagetype,fracturetype\n"; // CSV头

		geomaterials.forEach(material => {
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			// let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号

			// 将化学元素部分保留在一个单元格中
			let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
			let csystem = material.csystem || '';
			let cleavagetype = material.cleavagetype || '';
			let fracturetype = material.fracturetype ? `"${material.fracturetype.replace(/\n/g, ' ')}"` :
				''; // 替换双引号和换行符
			let row = `${name},${elements},${csystem},${cleavagetype},${fracturetype}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'colour') {
		csvContent += "name,elements,csystem,colour\n"; // CSV头

		geomaterials.forEach(material => {
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			// let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号

			// 将化学元素部分保留在一个单元格中
			let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
			let csystem = material.csystem || '';
			let colour = material.colour ? `"${material.colour.replace(/"/g, '""').replace(/\n/g, ' ')}"` :
				''; // 替换双引号和换行符
			let row = `${name},${elements},${csystem},${colour}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'streak') {
		csvContent += "name,elements,csystem,colour,streak\n"; // CSV头

		geomaterials.forEach(material => {
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			// let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号

			// 将化学元素部分保留在一个单元格中
			let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
			let csystem = material.csystem || '';
			let colour = material.colour ? `"${material.colour.replace(/"/g, '""').replace(/\n/g, ' ')}"` :
				''; // 替换双引号和换行符
			let streak = material.streak ? `"${material.streak.replace(/"/g, '""').replace(/\n/g, ' ')}"` : '';
			let row = `${name},${elements},${csystem},${colour},${streak}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'diapheny') {
		csvContent += "name,elements,csystem,colour,diapheny\n"; // CSV头

		geomaterials.forEach(material => {
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			// let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号

			// 将化学元素部分保留在一个单元格中
			let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
			let csystem = material.csystem || '';
			let colour = material.colour ? `"${material.colour.replace(/"/g, '""').replace(/\n/g, ' ')}"` :
				''; // 替换双引号和换行符
			let diapheny = material.diapheny ?
				`"${material.diapheny.replace(/"/g, '""').replace(/\n/g, ' ')}"` : '';
			let row = `${name},${elements},${csystem},${colour},${diapheny}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'lustretype') {
		csvContent += "name,elements,csystem,lustre,lustretype\n"; // CSV头

		geomaterials.forEach(material => {
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			// let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号

			// 将化学元素部分保留在一个单元格中
			let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
			let csystem = material.csystem || '';
			let lustre = material.lustre ? `"${material.lustre.replace(/"/g, '""').replace(/\n/g, ' ')}"` :
				''; // 替换双引号和换行符
			let lustretype = material.lustretype ?
				`"${material.lustretype.replace(/"/g, '""').replace(/\n/g, ' ')}"` : '';
			let row = `${name},${elements},${csystem},${lustre},${lustretype}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'opticalsign') {
		csvContent += "name,elements,colour,csystem,opticalsign\n"; // CSV头

		geomaterials.forEach(material => {
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			// let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号

			// 将化学元素部分保留在一个单元格中
			let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
			let colour = material.colour ? `"${material.colour.replace(/\n/g, ' ')}"` : ''; // 替换双引号和换行符
			let csystem = material.csystem || '';
			let opticalsign = material.opticalsign ? `"${material.opticalsign.replace(/\n/g, ' ')}"` : '';
			let row = `${name},${elements},${colour},${csystem},${opticalsign}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'polytypeof') {
		csvContent += "name,elements,csystem,opticalbireflectance,polytypeof\n"; // CSV头

		geomaterials.forEach(material => {
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			// let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号

			// 将化学元素部分保留在一个单元格中
			let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
			let csystem = material.csystem || '';
			let opticalbireflectance = material.opticalbireflectance ?
				`"${material.opticalbireflectance.replace(/"/g, '""').replace(/\n/g, ' ')}"` : ''; // 替换双引号和换行符
			let polytypeof = material.polytypeof
			let row = `${name},${elements},${csystem},${opticalbireflectance},${polytypeof}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'cleavagetype') {
		csvContent += "name,elements,csystem,cleavage,cleavagetype\n"; // CSV头

		geomaterials.forEach(material => {
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			// let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号

			// 将化学元素部分保留在一个单元格中
			let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
			let csystem = material.csystem || '';
			let cleavage = material.cleavage ?
				`"${material.cleavage.replace(/"/g, '""').replace(/\n/g, ' ').trim()}"` : ''; // 替换双引号和换行符
			let cleavagetype = material.cleavagetype ? `"${material.cleavagetype.replace(/\n/g, ' ').trim()}"` :
				'';
			let row = `${name},${elements},${csystem},${cleavage},${cleavagetype}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'name') {
		csvContent += "id,name,elements,mindat_formula,ima_status\n"; // CSV头

		geomaterials.forEach(material => {
			let id = material.id || '';
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			let elements = Array.isArray(material.elements) ? 
			            `"${material.elements.join(',')}"` : ''; // 确保 elements 是数组后再调用 .join
			let mindat_formula = material.mindat_formula ?
				`"${material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}"` : ''|| '';
			let ima_status = `"${material.ima_status.join(',')}"`;
			let row = `${id},${name},${elements},${mindat_formula},${ima_status}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'q' || selectedFunction === 'id') {
		csvContent += "id,name\n"; // CSV头

		geomaterials.forEach(material => {
			let id = material.id || '';
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			let row = `${id},${name}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'varietyof') {
		csvContent += "id,name,varietyof\n"; // CSV头

		geomaterials.forEach(material => {
			let id = material.id || '';
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			let varietyof = material.varietyof || '';
			let row = `${id},${name},${varietyof}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'entrytype') {
		csvContent += "id,name,entrytype\n"; // CSV头

		geomaterials.forEach(material => {
			let id = material.id || '';
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			let entrytype = material.entrytype;
			let row = `${id},${name},${entrytype}`;
			csvContent += row + "\n";
		});
	}
	else if (selectedFunction === 'imastatus') {
		csvContent += "id,name,elements,ima_formula,ima_status\n"; // CSV头
	
		geomaterials.forEach(material => {
			let id = material.id || '';
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			let elements = Array.isArray(material.elements) ?
			            `"${material.elements.join(',')}"` : ''; // 确保 elements 是数组后再调用 .join
			let ima_formula = material.ima_formula ?
				`"${material.ima_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}"` : '';
			let ima_status = `"${material.ima_status.join(',')}"`;
			let row = `${id},${name},${elements},${ima_formula},${ima_status}`;
			csvContent += row + "\n";
		});
	}
	
	if (selectedFunction === 'retrievedbycombined') {
		csvContent += "id,name,elements,hmin,hmax,csystem,ima_status,entrytype\n"; // CSV头

		geomaterials.forEach(material => {
			let id = material.id || '';
			let name = material.name.replace(/,/g, ''); // 去除名称中的逗号，以免干扰表格格式
			// let mindat_formula = material.mindat_formula.replace(/,/g, ''); // 去除化学式中的逗号
			// let mindat_formula = material.mindat_formula ? `"${material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}"` : '';
			// // 将化学元素部分保留在一个单元格中
			let elements = `"${material.elements.join(',')}"`; // 使用双引号将元素列表作为整体保留在一个单元格中
			let hmin = material.hmin || '';
			let hmax = material.hmax || '';
			let csystem = material.csystem || '';
			let ima_status = `"${material.ima_status.join(',')}"`;
			let entrytype = material.entrytype;
			let locality = material.locality
			    ? `"${material.locality.map(item => item.toString()).join(', ')}"`  // 将每个大数字转为字符串
			    : '';

			let row = `${id},${name},${elements},${hmin},${hmax},${csystem},${ima_status},${entrytype},${locality}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'countrylist' || selectedFunction === 'localitiesid') {
		csvContent += "id,country,elements,latitude,longitude,level,txt\n"; // CSV头

		geomaterials.forEach(material => {
			let id = material.id;
			let country = material.country; // 去除名称中的逗号，以免干扰表格格式
			let elements = material.elements; // 去除名称中的逗号，以免干扰表格格式
			let latitude = material.latitude; // 去除名称中的逗号，以免干扰表格格式
			let longitude = material.longitude; // 去除名称中的逗号，以免干扰表格格式
			let level = material.level; // 去除名称中的逗号，以免干扰表格格式
			let txt = material.txt ? `"${material.txt.replace(/\n/g, ' ').trim()}"` : ''; // 替换双引号和换行符
			let row = `${id},${country},${elements},${latitude},${longitude},${level},${txt}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'description') {
		csvContent += "id,country,elements,latitude,longitude,level,description_short\n"; // CSV头

		geomaterials.forEach(material => {
			let id = material.id;
			let country = material.country;
			let elements = material.elements;
			let latitude = material.latitude;
			let longitude = material.longitude;
			let level = material.level;
			let description_short = material.description_short ?
				`"${material.description_short.replace(/"/g, '""').replace(/\n/g, ' ').trim()}"` :
				''; // 替换双引号和换行符
			let row = `${id},${country},${elements},${latitude},${longitude},${level},${description_short}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'localitiesElementsInc' || selectedFunction === 'localitiesElementsExc' ||
		selectedFunction === 'localitiesElementsIncExc') {
		csvContent += "id,country,elements,latitude,longitude,level,txt\n"; // CSV头

		geomaterials.forEach(material => {
			let id = material.id;
			let country = material.country;
			let elements = material.elements;
			let latitude = material.latitude;
			let longitude = material.longitude;
			let level = material.level;
			let txt = material.txt ? `"${material.txt.replace(/"/g, '""').replace(/\n/g, ' ').trim()}"` :
				''; // 替换双引号和换行符
			let row = `${id},${country},${elements},${latitude},${longitude},${level},${txt}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'localitiesAge') {
		csvContent += "age_id,age_mav,age_ma2v,agemethod\n"; // CSV头

		geomaterials.forEach(material => {
			let age_id = material.age_id;
			let age_mav = material.age_mav;
			let age_ma2v = material.age_ma2v;
			let agemethod = material.agemethod ?
				`"${material.agemethod.replace(/"/g, '""').replace(/\n/g, ' ').trim()}"` : ''; // 替换双引号和换行符
			let row = `${age_id},${age_mav},${age_ma2v},${agemethod}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'mineralsImaList') {
		csvContent += "name,type_localities,ima_formula,ima_status\n"; // CSV头

		geomaterials.forEach(material => {
			let name = material.name;
			let type_localities = `"${material.type_localities.join(',')}"`;
			let ima_formula = material.ima_formula ?
				`"${material.ima_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}"` : '';
			let ima_status = `"${material.ima_status.join(',')}"`;
			let row = `${name},${type_localities},${ima_formula},${ima_status}`;
			csvContent += row + "\n";
		});
	} else if (selectedFunction === 'mineralsImaRetrieve') {
		csvContent += "id,name,mindat_formula,ima_status,elements,sigelements\n"; // CSV头

		geomaterials.forEach(material => {
			let id = material.id;
			let name = material.name;
			let mindat_formula = material.mindat_formula ?
				`"${material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}"` : '';
			let ima_status = `"${material.ima_status.join(',')}"`;
			let elements = `"${material.elements.join(',')}"`;
			let sigelements = `"${material.sigelements.join(',')}"`;
			let row = `${id},${name},${mindat_formula},${ima_status},${elements},${sigelements}`;
			csvContent += row + "\n";
		});
	}
	return csvContent;
}

export function generateTTLData(geomaterials, selectedFunction) {
	let ttlContent = "data:text/turtle;charset=utf-8,\uFEFF"; // TTL文件头
	ttlContent += `
	@prefix mindat: <https://mindat.org/> .
	@prefix schema: <https://schema.org/> .
	@prefix gsog: <https://w3id.org/gso/geology/> .
	
	`; // TTL的命名空间声明
	// 循环 geomaterials 数组，添加每个物质的数据
	if (selectedFunction === 'contains' ||
		selectedFunction === 'notContains' ||
		selectedFunction === 'containAllButNot' ||
		selectedFunction === 'containOnlyElems') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;
			ttlContent +=
				`  mindat:mindat_formula "${material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}" ;\n`;
			ttlContent += `  mindat:elements "${material.elements}" .\n\n`;

		});
	} else if (selectedFunction === 'hardnessGT' || selectedFunction === 'hardnessLT' || selectedFunction ===
		'hardnessRange') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;
			ttlContent += `  mindat:hmin "${material.hmin}" ;\n`;
			ttlContent += `  mindat:hmax "${material.hmax}" .\n\n`;

		});
	} else if (selectedFunction === 'densGT' || selectedFunction === 'densLT' || selectedFunction === 'densRange') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;
			ttlContent += `  mindat:dmeas "${material.dmeas}" ;\n`;
			ttlContent += `  mindat:dmeas2 "${material.dmeas2}" .\n\n`;
		});
	} else if (selectedFunction === 'optical2vRange') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;
			ttlContent += `  mindat:optical2vmeasured "${material.optical2vmeasured}" ;\n`;
			ttlContent += `  mindat:optical2vmeasured2 "${material.optical2vmeasured2}" .\n\n`;
		});
	} else if (selectedFunction === 'csystem') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;
			ttlContent +=
				`  mindat:mindat_formula "${material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}" ;\n`;
			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent += `  mindat:csystem "${material.csystem}" ;\n\n`;
			ttlContent +=
				`  mindat:commentcrystal "${material.commentcrystal.replace(/\n/g, ' ').trim()}" .\n\n`;
		});
	} else if (selectedFunction === 'fracturetype') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;

			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent += `  mindat:csystem "${material.csystem}" ;\n\n`;
			ttlContent += `  mindat:cleavagetype "${material.cleavagetype}" ;\n\n`;
			ttlContent += `  mindat:fracturetype "${material.fracturetype.replace(/\n/g, ' ')}" .\n\n`;


		});
	} else if (selectedFunction === 'colour') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;

			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent += `  mindat:csystem "${material.csystem}" ;\n\n`;
			ttlContent += `  mindat:colour "${material.colour.replace(/"/g, '""').replace(/\n/g, ' ')}" .\n\n`;


		});
	} else if (selectedFunction === 'streak') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;

			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent += `  mindat:csystem "${material.csystem}" ;\n\n`;
			ttlContent += `  mindat:colour "${material.colour.replace(/"/g, '""').replace(/\n/g, ' ')}" ;\n\n`;
			ttlContent += `  mindat:streak "${material.streak.replace(/"/g, '""').replace(/\n/g, ' ')}" .\n\n`;

		});
	} else if (selectedFunction === 'diapheny') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;

			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent += `  mindat:csystem "${material.csystem}" ;\n\n`;
			ttlContent += `  mindat:colour "${material.colour.replace(/"/g, '""').replace(/\n/g, ' ')}" ;\n\n`;
			ttlContent +=
				`  mindat:diapheny "${material.diapheny.replace(/"/g, '""').replace(/\n/g, ' ')}" .\n\n`;

		});
	} else if (selectedFunction === 'lustretype') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;

			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent += `  mindat:csystem "${material.csystem}" ;\n\n`;
			ttlContent += `  mindat:lustre "${material.lustre.replace(/"/g, '""').replace(/\n/g, ' ')}" ;\n\n`;
			ttlContent +=
				`  mindat:lustretype "${material.lustretype.replace(/"/g, '""').replace(/\n/g, ' ')}" .\n\n`;

		});
	} else if (selectedFunction === 'opticalsign') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;

			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent += `  mindat:colour "${material.colour.replace(/"/g, '""').replace(/\n/g, ' ')}" ;\n\n`;
			ttlContent += `  mindat:csystem "${material.csystem}" ;\n\n`;
			ttlContent += `  mindat:opticalsign "${material.opticalsign.replace(/\n/g, ' ')}" .\n\n`;

		});
	} else if (selectedFunction === 'polytypeof') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;

			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent += `  mindat:csystem "${material.csystem}" ;\n\n`;
			ttlContent +=
				`  mindat:opticalbireflectance "${material.opticalbireflectance.replace(/"/g, '""').replace(/\n/g, ' ')}" ;\n\n`;
			ttlContent += `  mindat:polytypeof "${material.polytypeof}" .\n\n`;

		});
	} else if (selectedFunction === 'cleavagetype') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;

			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent += `  mindat:csystem "${material.csystem}" ;\n\n`;
			ttlContent +=
				`  mindat:cleavage "${material.cleavage.replace(/"/g, '""').replace(/\n/g, ' ').trim()}" ;\n\n`;
			ttlContent += `  mindat:cleavagetype "${material.cleavagetype.replace(/\n/g, ' ').trim()}" .\n\n`;

		});
	} else if (selectedFunction === 'name') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:id "${material.id}" ;\n\n`;
			ttlContent += `  mindat:name "${material.name}" .\n`;
			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent +=
				`  mindat:mindat_formula "${material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}" ;\n`;
			ttlContent += `  mindat:ima_status "${material.ima_status}" .\n`;
		});
	} else if (selectedFunction === 'q' || selectedFunction === 'id') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:id "${material.id}" ;\n\n`;
			ttlContent += `  mindat:name "${material.name}" .\n`;

		});
	} else if (selectedFunction === 'varietyof') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:id "${material.id}" ;\n\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;
			ttlContent += `  mindat:varietyof "${material.varietyof}" .\n`;
		});
	} else if (selectedFunction === 'entrytype') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:id "${material.id}" ;\n\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;
			ttlContent += `  mindat:entrytype "${material.entrytype}" .\n`;
		});
	}
	else if (selectedFunction === 'imastatus') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;
	
			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:id "${material.id}" ;\n\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;
			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent += `  mindat:ima_formula "${material.ima_formula}" .\n`;
			ttlContent += `  mindat:ima_status "${material.ima_status}" .\n`;
		});
	}
	if (selectedFunction === 'retrievedbycombined') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Geomaterials , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:id "${material.id}" ;\n\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n`;
			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent += `  mindat:hmin "${material.hmin}" ;\n\n`;
			ttlContent += `  mindat:hmax "${material.hmax}" ;\n\n`;
			ttlContent += `  mindat:csystem "${material.csystem}" ;\n\n`;
			ttlContent += `  mindat:ima_status "${material.ima_status}" ;\n\n`;
			ttlContent += `  mindat:entrytype "${material.entrytype}" .\n`;

		});
	} else if (selectedFunction === 'countrylist' || selectedFunction === 'localitiesid') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Localities , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:id "${material.id}" ;\n\n`;
			ttlContent += `  mindat:country "${material.country}" ;\n`;
			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent += `  mindat:latitude "${material.latitude}" ;\n\n`;
			ttlContent += `  mindat:longitude "${material.longitude}" ;\n\n`;
			ttlContent += `  mindat:level "${material.level}" ;\n\n`;
			ttlContent += `  mindat:txt "${material.txt.replace(/\n/g, ' ').trim()}" .\n\n`;

		});
	} else if (selectedFunction === 'description') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Localities , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:id "${material.id}" ;\n\n`;
			ttlContent += `  mindat:country "${material.country}" ;\n`;
			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent += `  mindat:latitude "${material.latitude}" ;\n\n`;
			ttlContent += `  mindat:longitude "${material.longitude}" ;\n\n`;
			ttlContent += `  mindat:level "${material.level}" ;\n\n`;
			ttlContent +=
				`  mindat:description_short "${material.description_short.replace(/"/g, '""').replace(/\n/g, ' ').trim()}" .\n\n`;

		});
	} else if (selectedFunction === 'localitiesElementsInc' || selectedFunction === 'localitiesElementsExc' ||
		selectedFunction === 'localitiesElementsIncExc') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Localities , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:id "${material.id}" ;\n\n`;
			ttlContent += `  mindat:country "${material.country}" ;\n`;
			ttlContent += `  mindat:elements "${material.elements}" ;\n\n`;
			ttlContent += `  mindat:latitude "${material.latitude}" ;\n\n`;
			ttlContent += `  mindat:longitude "${material.longitude}" ;\n\n`;
			ttlContent += `  mindat:level "${material.level}" ;\n\n`;
			ttlContent += `  mindat:txt "${material.txt.replace(/\n/g, ' ').trim()}" .\n\n`;

		});
	} else if (selectedFunction === 'localitiesAge') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Localities , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:age_id "${material.age_id}" ;\n\n`;
			ttlContent += `  mindat:age_mav "${material.age_mav}" ;\n`;
			ttlContent += `  mindat:age_ma2v "${material.age_ma2v}" ;\n\n`;
			ttlContent +=
				`  mindat:agemethod "${material.agemethod.replace(/"/g, '""').replace(/\n/g, ' ').trim()}" .\n\n`;

		});
	} else if (selectedFunction === 'mineralsImaList') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Minerals_ima , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n\n`;
			ttlContent += `  mindat:type_localities "${material.type_localities}" ;\n`;
			ttlContent +=
				`  mindat:ima_formula "${material.ima_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}" ;\n\n`;
			ttlContent += `  mindat:ima_status "${material.ima_status}" .\n\n`;
		});
	} else if (selectedFunction === 'mineralsImaRetrieve') {
		geomaterials.forEach((material, index) => {
			// 使用索引生成 subject（如 < 1 >, < 2 > 等）
			let subject = `<${index + 1}>`;

			// 生成每个 material 的 TTL 数据
			ttlContent += `${subject} a mindat:Minerals_ima , schema:Dataset , gsog:Mineral_Material ;\n`;
			ttlContent += `  mindat:id "${material.id}" ;\n\n`;
			ttlContent += `  mindat:name "${material.name}" ;\n\n`;
			ttlContent +=
				`  mindat:mindat_formula "${material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ').replace(/#/g, '')}" ;\n\n`;
			ttlContent += `  mindat:ima_status "${material.ima_status}" ;\n\n`;
			ttlContent += `  mindat:elements "${material.elements}" ;\n`;
			ttlContent += `  mindat:sigelements "${material.sigelements}" .\n\n`;
		});
	}
	return ttlContent;
}



//有问题
export function generateJSONLDData(geomaterials, selectedFunction) {
	let jsonldContent = "data:application/ld+json;charset=utf-8,\uFEFF";

	// 初始化 JSON-LD 对象，并确保 @graph 被正确初始化为一个空数组
	let jsonldObject = {
		"@context": {
			"mindat": "https://mindat.org/",
			"schema": "https://schema.org/",
			"gsog": "https://w3id.org/gso/geology/"
		},
		"@graph": [] // 确保这个属性被正确初始化
	};
	// 循环 geomaterials 数组，添加每个物质的数据
	if (selectedFunction === 'contains' ||
		selectedFunction === 'notContains' ||
		selectedFunction === 'containAllButNot' ||
		selectedFunction === 'containOnlyElems') {

		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:name": material.name,
					"mindat:ima_formula": material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ')
						.replace(/#/g, ''), // 替换特殊字符
					"mindat:elements": material.elements // 把元素数组转换成字符串
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'hardnessGT' || selectedFunction === 'hardnessLT' || selectedFunction ===
		'hardnessRange') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:name": material.name,
					"mindat:hmin": material.hmin, // 替换特殊字符
					"mindat:hmax": material.hmax // 把元素数组转换成字符串
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'densGT' || selectedFunction === 'densLT' || selectedFunction === 'densRange') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:name": material.name,
					"mindat:dmeas": material.dmeas, // 替换特殊字符
					"mindat:dmeas": material.dmeas // 把元素数组转换成字符串
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'optical2vRange') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:name": material.name,
					"mindat:optical2vmeasured": material.optical2vmeasured, // 替换特殊字符
					"mindat:optical2vmeasured2": material.optical2vmeasured2 // 把元素数组转换成字符串
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'csystem') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:name": material.name,
					"mindat:mindat_formula": material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ')
						.replace(/#/g, ''),
					"mindat:elements": material.elements,
					"mindat:csystem": material.csystem, // 替换特殊字符
					"mindat:commentcrystal": material.commentcrystal.replace(/\n/g, ' ')
					.trim() // 把元素数组转换成字符串
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'fracturetype') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:name": material.name,
					"mindat:elements": material.elements,
					"mindat:csystem": material.csystem,

					"mindat:cleavagetype": material.cleavagetype, // 替换特殊字符
					"mindat:fracturetype": material.fracturetype.replace(/\n/g, ' ') // 把元素数组转换成字符串
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'colour') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:name": material.name,
					"mindat:elements": material.elements,
					"mindat:csystem": material.csystem,
					"mindat:colour": material.colour.replace(/"/g, '""').replace(/\n/g, ' ') // 替换特殊字符

				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'streak') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:name": material.name,
					"mindat:elements": material.elements,
					"mindat:csystem": material.csystem,
					"mindat:colour": material.colour.replace(/"/g, '""').replace(/\n/g, ' '), // 替换特殊字符
					"mindat:streak": material.streak.replace(/"/g, '""').replace(/\n/g, ' ')
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'diapheny') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:name": material.name,
					"mindat:elements": material.elements,
					"mindat:csystem": material.csystem,
					"mindat:colour": material.colour.replace(/"/g, '""').replace(/\n/g, ' '), // 替换特殊字符
					"mindat:diapheny": material.diapheny.replace(/"/g, '""').replace(/\n/g, ' ')
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'lustretype') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:name": material.name,
					"mindat:elements": material.elements,
					"mindat:csystem": material.csystem,
					"mindat:lustre": material.lustre.replace(/"/g, '""').replace(/\n/g, ' '), // 替换特殊字符
					"mindat:lustretype": material.lustretype.replace(/"/g, '""').replace(/\n/g, ' ')
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'opticalsign') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:name": material.name,
					"mindat:elements": material.elements,
					"mindat:colour": material.colour.replace(/"/g, '""').replace(/\n/g, ' '),
					"mindat:csystem": material.csystem,
					"mindat:opticalsign": material.opticalsign.replace(/\n/g, ' ') // 替换特殊字符
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'polytypeof') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:name": material.name,
					"mindat:elements": material.elements,
					"mindat:csystem": material.csystem,
					"mindat:opticalbireflectance": material.opticalbireflectance.replace(/"/g, '""')
						.replace(/\n/g, ' '),
					"mindat:polytypeof": material.polytypeof
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'cleavagetype') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:name": material.name,
					"mindat:elements": material.elements,
					"mindat:csystem": material.csystem,
					"mindat:cleavage": material.cleavage.replace(/"/g, '""').replace(/\n/g, ' ').trim(),
					"mindat:cleavagetype": material.cleavagetype.replace(/\n/g, ' ').trim()
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'name') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:id": material.id,
					"mindat:name": material.name,
					"mindat:elements": material.elements,
					"mindat:mindat_formula": material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ')
						.replace(/#/g, ''),
					"mindat:ima_status": material.ima_status
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'q' || selectedFunction === 'id') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:id": material.id,
					"mindat:name": material.name
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'varietyof') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:id": material.id,
					"mindat:name": material.name,
					"mindat:varietyof": material.varietyof
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'entrytype') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:id": material.id,
					"mindat:name": material.name,
					"mindat:entrytype": material.entrytype
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	}
	else if (selectedFunction === 'imastatus') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:id": material.id,
					"mindat:name": material.name,
					"mindat:elements": material.elements,
					"mindat:ima_formula": material.ima_formula.replace(/"/g, '""').replace(/\n/g, ' ')
						.replace(/#/g, ''),
					"mindat:ima_status": material.ima_status
				};
	
				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	}
	if (selectedFunction === 'retrievedbycombined') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Geomaterials", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:id": material.id,
					"mindat:name": material.name,
					"mindat:elements": material.elements,
					"mindat:hmin": material.hmin,
					"mindat:hmax": material.hmax,
					"mindat:csystem": material.csystem,
					"mindat:ima_status": material.ima_status,
					"mindat:entrytype": material.entrytype
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'countrylist' || selectedFunction === 'localitiesid') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Localities", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:id": material.id,
					"mindat:country": material.country,
					"mindat:elements": material.elements,
					"mindat:latitude": material.latitude,
					"mindat:longitude": material.longitude,
					"mindat:level": material.level,
					"mindat:txt": material.txt.replace(/\n/g, ' ').trim()
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'description') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Localities", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:id": material.id,
					"mindat:country": material.country,
					"mindat:elements": material.elements,
					"mindat:latitude": material.latitude,
					"mindat:longitude": material.longitude,
					"mindat:level": material.level,
					"mindat:description_short": material.description_short.replace(/"/g, '""').replace(
						/\n/g, ' ').trim()
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'localitiesElementsInc' || selectedFunction === 'localitiesElementsExc' ||
		selectedFunction === 'localitiesElementsIncExc') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Localities", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:id": material.id,
					"mindat:country": material.country,
					"mindat:elements": material.elements,
					"mindat:latitude": material.latitude,
					"mindat:longitude": material.longitude,
					"mindat:level": material.level,
					"mindat:txt": material.txt.replace(/\n/g, ' ').trim()
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'localitiesAge') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Localities", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:id": material.id,
					"mindat:age_mav": material.age_mav,
					"mindat:age_ma2v": material.age_ma2v,
					"mindat:agemethod": material.agemethod.replace(/"/g, '""').replace(/\n/g, ' ').trim()
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'mineralsImaList') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Minerals_ima", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:name": material.name,
					"mindat:type_localities": material.type_localities,
					"mindat:ima_formula": material.ima_formula.replace(/"/g, '""').replace(/\n/g, ' ')
						.replace(/#/g, ''),
					"mindat:ima_status": material.ima_status
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	} else if (selectedFunction === 'mineralsImaRetrieve') {
		geomaterials.forEach((material) => {
			// 确保 material 存在并且有期望的属性
			if (material) {
				let jsonldData = {
					"@type": ["mindat:Minerals_ima", "schema:Dataset", "gsog:Mineral_Material"],
					"mindat:id": material.id,
					"mindat:name": material.name,
					"mindat:mindat_formula": material.mindat_formula.replace(/"/g, '""').replace(/\n/g, ' ')
						.replace(/#/g, ''),
					"mindat:ima_status": material.ima_status,
					"mindat:elements": material.elements,
					"mindat:sigelements": material.sigelements
				};

				// 将每个物质的数据添加到 @graph 中
				jsonldObject["@graph"].push(jsonldData);
			}
		});
	}

	// 将 JSON 对象序列化为字符串并附加到 jsonldContent
	jsonldContent += JSON.stringify(jsonldObject, null, 2);

	// 返回 JSON-LD 内容
	return jsonldContent;
}
