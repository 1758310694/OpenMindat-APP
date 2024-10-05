 import { generateCSVData } from '@/Formatter.js';
  
 export function downloadDataCSV(geomaterials, selectedFunction) {
		 if(selectedFunction === 'contains' ||
		   selectedFunction === 'notContains' || 
		   selectedFunction === 'containAllButNot' || 
		   selectedFunction === 'containOnlyElems'){
	  const csvData = generateCSVData(geomaterials, selectedFunction);
	  	  // 检查当前平台并处理不同的逻辑
	  	  if (process.env.VUE_APP_PLATFORM === 'h5') {
	  	    // H5端下载 CSV 文件
	  	    const link = document.createElement('a');
	  	    link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
	  	    link.setAttribute('download', 'element.csv');
	  	    document.body.appendChild(link); // Required for FF
	  	    link.click();
	  	    document.body.removeChild(link);
	  	  } 
	  	  else {
	  	     const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/, '');
	  		 const fileName = 'element.csv';
	  
	      // 获取文件系统对象
	      plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
	          // 创建文件
	          fs.root.getFile(fileName, { create: true }, function(fileEntry) {
	              // 创建写入流
	              fileEntry.createWriter(function(writer) {
	                  writer.write(csvData);
	                  
	                  // 保存成功后，使用uni.openDocument或plus.runtime.openFile打开文件
	                  uni.showToast({
	                      title: '文件已保存',
	                      icon: 'success'
	                  });
	  
	                  // 打开文件
	                  plus.runtime.openFile(fileEntry.fullPath);
	              }, function(e) {
	                  console.log('文件写入失败: ' + e.message);
	              });
	          });
	      });
	  }
	  }
	 else if(selectedFunction === 'hardnessGT' || selectedFunction === 'hardnessLT' || selectedFunction ==='hardnessRange'){const csvData = generateCSVData(geomaterials, selectedFunction);
      const link = document.createElement('a');
      link.setAttribute('href', csvData);
      link.setAttribute('download', 'hardness_materials.csv');
      document.body.appendChild(link); // Required for FF
      link.click();
      document.body.removeChild(link);
    }
	else if(selectedFunction === 'densGT' || selectedFunction === 'densLT' || selectedFunction ==='densRange'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'density_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'optical2vGT' || selectedFunction === 'optical2vLT' || selectedFunction ==='optical2vRange'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'optical2v_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'csystem'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'csystem_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'fracturetype'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'fracturetype_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'colour'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'colour_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'streak'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'streak_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'diapheny'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'diapheny_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'lustretype'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'lustretype_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'opticalsign'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'opticalsign_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'polytypeof'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'polytypeof_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'cleavagetype'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'cleavagetype_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'name'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'name_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'q'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'searchname_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if (selectedFunction === 'id') {
	  const csvData = generateCSVData(geomaterials, selectedFunction);
	  // 检查当前平台并处理不同的逻辑
	  if (process.env.VUE_APP_PLATFORM === 'h5') {
	    // H5端下载 CSV 文件
	    const link = document.createElement('a');
	    link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
	    link.setAttribute('download', 'id.csv');
	    document.body.appendChild(link); // Required for FF
	    link.click();
	    document.body.removeChild(link);
	  } 
	  else {
	     const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/, '');
		 const fileName = 'id.csv';

    // 获取文件系统对象
    plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
        // 创建文件
        fs.root.getFile(fileName, { create: true }, function(fileEntry) {
            // 创建写入流
            fileEntry.createWriter(function(writer) {
                writer.write(csvData);
                
                // 保存成功后，使用uni.openDocument或plus.runtime.openFile打开文件
                uni.showToast({
                    title: '文件已保存',
                    icon: 'success'
                });

                // 打开文件
                plus.runtime.openFile(fileEntry.fullPath);
            }, function(e) {
                console.log('文件写入失败: ' + e.message);
            });
        });
    });
}
}
	
   
	


	else if(selectedFunction === 'varietyof'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'varietyof_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'entrytype'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'entrytype_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'retrievedbycombined'){const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'retrievedbycombined_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if(selectedFunction === 'countrylist' ){
	  const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'countrylist_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if( selectedFunction === 'localitiesid' ){
	  const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'localitiesid_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if( selectedFunction === 'description' ){
	  const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'description_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if( selectedFunction === 'localitiesElementsInc' ){
	  const csvData = generateCSVData(geomaterials, selectedFunction);
	  const link = document.createElement('a');
	  link.setAttribute('href', csvData);
	  link.setAttribute('download', 'localitiesElementsInc_materials.csv');
	  document.body.appendChild(link); // Required for FF
	  link.click();
	  document.body.removeChild(link);
	}
	else if( selectedFunction === 'localitiesElementsExc' ){
		  const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'localitiesElementsExc_materials.csv');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
	else if( selectedFunction === 'localitiesElementsIncExc' ){
		  const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'localitiesElementsIncExc_materials.csv');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
	else if( selectedFunction === 'localitiesAge' ){
		  const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'localitiesAge_materials.csv');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}	
	else if( selectedFunction === 'mineralsImaList' ){
		  const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'mineralsImaList_materials.csv');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}	
	else if( selectedFunction === 'mineralsImaRetrieve' ){
		  const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'mineralsImaRetrieve_materials.csv');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		}
		
	export function downloadDataTXT(geomaterials,selectedFunction){
		if(selectedFunction === 'contains' ||
			   selectedFunction === 'notContains' || 
			   selectedFunction === 'containAllButNot' || 
			   selectedFunction === 'containOnlyElems'){
		   const csvData = generateCSVData(geomaterials, selectedFunction);
		   const link = document.createElement('a');
		   link.setAttribute('href', csvData);
		   link.setAttribute('download', 'geomaterials.txt');
		   document.body.appendChild(link); // Required for FF
		   link.click();
		   document.body.removeChild(link);
		 }
		 else if(selectedFunction === 'hardnessGT' || selectedFunction === 'hardnessLT' || selectedFunction ==='hardnessRange'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'hardness_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'densGT' || selectedFunction === 'densLT' || selectedFunction ==='densRange'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'density_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'optical2vGT' || selectedFunction === 'optical2vLT' || selectedFunction ==='optical2vRange'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'optical2v_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'csystem'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'csystem_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'fracturetype'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'fracturetype_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'colour'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'colour_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'streak'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'streak_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'diapheny'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'diapheny_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'lustretype'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'lustretype_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'opticalsign'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'opticalsign_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'polytypeof'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'polytypeof_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'cleavagetype'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'cleavagetype_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'name'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'name_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'q'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'searchname_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'id'){const csvData = generateCSVData(geomaterials, selectedFunction);
			  const link = document.createElement('a');
			  link.setAttribute('href', csvData);
			  link.setAttribute('download', 'id_materials.txt');
			  document.body.appendChild(link); // Required for FF
			  link.click();
			  document.body.removeChild(link);
			} 
		
		
		
		else if(selectedFunction === 'varietyof'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'varietyof_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'entrytype'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'entrytype_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'retrievedbycombined'){const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'retrievedbycombined_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if(selectedFunction === 'countrylist' ){
		  const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'countrylist_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if( selectedFunction === 'localitiesid' ){
		  const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'localitiesid_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if( selectedFunction === 'description' ){
		  const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'description_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if( selectedFunction === 'localitiesElementsInc' ){
		  const csvData = generateCSVData(geomaterials, selectedFunction);
		  const link = document.createElement('a');
		  link.setAttribute('href', csvData);
		  link.setAttribute('download', 'localitiesElementsInc_materials.txt');
		  document.body.appendChild(link); // Required for FF
		  link.click();
		  document.body.removeChild(link);
		}
		else if( selectedFunction === 'localitiesElementsExc' ){
			  const csvData = generateCSVData(geomaterials, selectedFunction);
			  const link = document.createElement('a');
			  link.setAttribute('href', csvData);
			  link.setAttribute('download', 'localitiesElementsExc_materials.txt');
			  document.body.appendChild(link); // Required for FF
			  link.click();
			  document.body.removeChild(link);
			}
		else if( selectedFunction === 'localitiesElementsIncExc' ){
			  const csvData = generateCSVData(geomaterials, selectedFunction);
			  const link = document.createElement('a');
			  link.setAttribute('href', csvData);
			  link.setAttribute('download', 'localitiesElementsIncExc_materials.txt');
			  document.body.appendChild(link); // Required for FF
			  link.click();
			  document.body.removeChild(link);
			}
		else if( selectedFunction === 'localitiesAge' ){
			  const csvData = generateCSVData(geomaterials, selectedFunction);
			  const link = document.createElement('a');
			  link.setAttribute('href', csvData);
			  link.setAttribute('download', 'localitiesAge_materials.txt');
			  document.body.appendChild(link); // Required for FF
			  link.click();
			  document.body.removeChild(link);
			}	
		else if( selectedFunction === 'mineralsImaList' ){
			  const csvData = generateCSVData(geomaterials, selectedFunction);
			  const link = document.createElement('a');
			  link.setAttribute('href', csvData);
			  link.setAttribute('download', 'mineralsImaList_materials.txt');
			  document.body.appendChild(link); // Required for FF
			  link.click();
			  document.body.removeChild(link);
			}	
		else if( selectedFunction === 'mineralsImaRetrieve' ){
			  const csvData = generateCSVData(geomaterials, selectedFunction);
			  const link = document.createElement('a');
			  link.setAttribute('href', csvData);
			  link.setAttribute('download', 'mineralsImaRetrieve_materials.txt');
			  document.body.appendChild(link); // Required for FF
			  link.click();
			  document.body.removeChild(link);
		}
		
	}
