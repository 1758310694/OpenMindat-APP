import {
	generateCSVData,
	generateTTLData,
	generateJSONLDData
} from '@/Formatter.js';


export function downloadDataCSV(geomaterials, selectedFunction) {
	if (selectedFunction === 'contains' ||
		selectedFunction === 'notContains' ||
		selectedFunction === 'containAllButNot' ||
		selectedFunction === 'containOnlyElems') {
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
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'element.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'hardnessGT' || selectedFunction === 'hardnessLT' || selectedFunction ===
		'hardnessRange') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'hardness.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'hardness.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'densGT' || selectedFunction === 'densLT' || selectedFunction === 'densRange') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'dens.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'dens.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'optical2vGT' || selectedFunction === 'optical2vLT' || selectedFunction ===
		'optical2vRange') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'optical2v.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'optical2v.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'csystem') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'csystem.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'csystem.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'fracturetype') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'fracturetype.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'fracturetype.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'colour') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'colour.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'colour.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'streak') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'streak.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'streak.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'diapheny') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'diapheny.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'diapheny.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'lustretype') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'lustretype.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'lustretype.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'opticalsign') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'opticalsign.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'opticalsign.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'polytypeof') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'polytypeof.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'polytypeof.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'cleavagetype') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'cleavagetype.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'cleavagetype.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'name') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'name.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'name.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'q') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'q.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'q.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'id') {
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
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'id.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'varietyof') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'varietyof.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'varietyof.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'entrytype') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'entrytype.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'entrytype.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'retrievedbycombined') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'retrievedbycombined.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'retrievedbycombined.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'countrylist') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		const link = document.createElement('a');
		link.setAttribute('href', csvData);
		link.setAttribute('download', 'countrylist_materials.csv');
		document.body.appendChild(link); // Required for FF
		link.click();
		document.body.removeChild(link);
	} else if (selectedFunction === 'localitiesid') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'localitiesid.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'localitiesid.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'description') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'description.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'description.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'localitiesElementsInc') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'localitiesElementsInc.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsInc.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'localitiesElementsExc') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'localitiesElementsExc.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsExc.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'localitiesElementsIncExc') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'localitiesElementsIncExc.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsIncExc.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'localitiesAge') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'localitiesAge.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'localitiesAge.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'mineralsImaList') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'mineralsImaList.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'mineralsImaList.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'mineralsImaRetrieve') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'mineralsImaRetrieve.csv');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'mineralsImaRetrieve.csv';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
}

export function downloadDataTXT(geomaterials, selectedFunction) {
	if (selectedFunction === 'contains' ||
		selectedFunction === 'notContains' ||
		selectedFunction === 'containAllButNot' ||
		selectedFunction === 'containOnlyElems') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'element.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'element.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'hardnessGT' || selectedFunction === 'hardnessLT' || selectedFunction ===
		'hardnessRange') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'hardness.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'hardness.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'densGT' || selectedFunction === 'densLT' || selectedFunction === 'densRange') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'dens.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'dens.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'optical2vGT' || selectedFunction === 'optical2vLT' || selectedFunction ===
		'optical2vRange') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'optical2v.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'optical2v.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'csystem') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'csystem.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'csystem.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'fracturetype') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'fracturetype.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'fracturetype.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'colour') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'colour.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'colour.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'streak') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'streak.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'streak.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'diapheny') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'diapheny.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'diapheny.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'lustretype') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'lustretype.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'lustretype.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'opticalsign') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'opticalsign.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'opticalsign.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'polytypeof') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'polytypeof.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'polytypeof.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'cleavagetype') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'cleavagetype.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'cleavagetype.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'name') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'name.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'name.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'q') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'q.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'q.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'id') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'id.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'id.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'varietyof') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'varietyof.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'varietyof.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'entrytype') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'entrytype.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'entrytype.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'retrievedbycombined') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'retrievedbycombined.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'retrievedbycombined.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'countrylist') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		const link = document.createElement('a');
		link.setAttribute('href', csvData);
		link.setAttribute('download', 'countrylist_materials.txt');
		document.body.appendChild(link); // Required for FF
		link.click();
		document.body.removeChild(link);
	} else if (selectedFunction === 'localitiesid') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'localitiesid.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'localitiesid.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'description') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'description.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'description.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'localitiesElementsInc') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'localitiesElementsInc.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsInc.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'localitiesElementsExc') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'localitiesElementsExc.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsExc.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'localitiesElementsIncExc') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'localitiesElementsIncExc.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsIncExc.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'localitiesAge') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'localitiesAge.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'localitiesAge.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'mineralsImaList') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'mineralsImaList.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'mineralsImaList.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
	} else if (selectedFunction === 'mineralsImaRetrieve') {
		const csvData = generateCSVData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', csvData); // 如果 csvData 是以 "data:text/csv;charset=utf-8," 开头的，确保这里正确处理
			link.setAttribute('download', 'mineralsImaRetrieve.txt');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const csvData = generateCSVData(geomaterials, selectedFunction).replace(/^data:text\/csv;charset=utf-8,/,
				'');
			const fileName = 'mineralsImaRetrieve.txt';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
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
}





export function downloadDataTTL(geomaterials, selectedFunction) {
	if (selectedFunction === 'contains' ||
		selectedFunction === 'notContains' ||
		selectedFunction === 'containAllButNot' ||
		selectedFunction === 'containOnlyElems') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'element.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'element.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'hardnessGT' || selectedFunction === 'hardnessLT' || selectedFunction ===
		'hardnessRange') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'hardness.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'hardness.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'densGT' || selectedFunction === 'densLT' || selectedFunction === 'densRange') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'dens.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'dens.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'optical2vRange') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'optical2v.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'optical2v.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'csystem') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'csystem.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'csystem.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'fracturetype') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'fracturetype.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'fracturetype.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'colour') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'colour.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'colour.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'streak') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'streak.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'streak.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'diapheny') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'diapheny.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'diapheny.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'lustretype') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'lustretype.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'lustretype.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'opticalsign') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'opticalsign.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'opticalsign.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'polytypeof') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'polytypeof.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'polytypeof.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'cleavagetype') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'cleavagetype.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'cleavagetype.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'name') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'name.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'name.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'q') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'q.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'q.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'id') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'id.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'id.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'varietyof') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'varietyof.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'varietyof.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'entrytype') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'entrytype.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'entrytype.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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




	if (selectedFunction === 'retrievedbycombined') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'retrievedbycombined.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'retrievedbycombined.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'countrylist') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'countrylist.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'countrylist.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'localitiesid') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'localitiesid.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'localitiesid.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'description') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'description.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'description.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'localitiesElementsInc') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'localitiesElementsInc.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsInc.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'localitiesElementsExc') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'localitiesElementsExc.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsExc.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'localitiesElementsIncExc') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'localitiesElementsIncExc.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsIncExc.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'localitiesAge') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'localitiesAge.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'localitiesAge.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'mineralsImaList') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'mineralsImaList.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'mineralsImaList.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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
	} else if (selectedFunction === 'mineralsImaRetrieve') {
		const ttlData = generateTTLData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', ttlData);
			link.setAttribute('download', 'mineralsImaRetrieve.ttl');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const ttlData = generateTTLData(geomaterials, selectedFunction).replace(/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'mineralsImaRetrieve.ttl';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(ttlData);

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

}


export function downloadDataJSONLD(geomaterials, selectedFunction) {
	if (selectedFunction === 'contains' ||
		selectedFunction === 'notContains' ||
		selectedFunction === 'containAllButNot' ||
		selectedFunction === 'containOnlyElems') {

		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'elements.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'elements.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'hardnessGT' || selectedFunction === 'hardnessLT' || selectedFunction ===
		'hardnessRange') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'hardness.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'hardness.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'densGT' || selectedFunction === 'densLT' || selectedFunction === 'densRange') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'dens.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'dens.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'optical2vGT' || selectedFunction === 'optical2vLT' || selectedFunction ===
		'optical2vRange') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'optical2v.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'optical2v.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'csystem') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'csystem.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'csystem.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'fracturetype') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'fracturetype.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'fracturetype.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'colour') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'colour.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'colour.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'streak') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'streak.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'streak.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'diapheny') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'diapheny.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'diapheny.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'lustretype') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'lustretype.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'lustretype.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'opticalsign') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'opticalsign.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'opticalsign.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'polytypeof') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'polytypeof.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'polytypeof.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'cleavagetype') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'cleavagetype.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'cleavagetype.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'name') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'name.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'name.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'q') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'q.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'q.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'id') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'id.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'id.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'varietyof') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'varietyof.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'varietyof.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'entrytype') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'entrytype.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'entrytype.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'retrievedbycombined') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'retrievedbycombined.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'retrievedbycombined.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'countrylist') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'countrylist.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'countrylist.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'description') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'description.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'description.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'localitiesElementsInc') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'localitiesElementsInc.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsInc.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'localitiesElementsExc') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'localitiesElementsExc.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsExc.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'localitiesElementsIncExc') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'localitiesElementsIncExc.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsIncExc.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'localitiesAge') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'localitiesAge.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'localitiesAge.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'mineralsImaList') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'mineralsImaList.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'mineralsImaList.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'mineralsImaRetrieve') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'mineralsImaRetrieve.jsonld');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'mineralsImaRetrieve.jsonld';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
}


export function downloadDataRDF(geomaterials, selectedFunction) {
	if (selectedFunction === 'contains' ||
		selectedFunction === 'notContains' ||
		selectedFunction === 'containAllButNot' ||
		selectedFunction === 'containOnlyElems') {

		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'elements.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'elements.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'hardnessGT' || selectedFunction === 'hardnessLT' || selectedFunction ===
		'hardnessRange') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'hardness.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'hardness.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'densGT' || selectedFunction === 'densLT' || selectedFunction === 'densRange') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'dens.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'dens.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'optical2vGT' || selectedFunction === 'optical2vLT' || selectedFunction ===
		'optical2vRange') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'optical2v.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'optical2v.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'csystem') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'csystem.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'csystem.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'fracturetype') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'fracturetype.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'fracturetype.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'colour') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'colour.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:text\/turtle;charset=utf-8,/,
				'');
			const fileName = 'colour.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'streak') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'streak.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'streak.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'diapheny') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'diapheny.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'diapheny.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'lustretype') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'lustretype.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'lustretype.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'opticalsign') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'opticalsign.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'opticalsign.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'polytypeof') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'polytypeof.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'polytypeof.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'cleavagetype') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'cleavagetype.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'cleavagetype.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'name') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'name.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'name.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'q') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'q.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'q.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'id') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'id.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'id.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'varietyof') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'varietyof.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'varietyof.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'entrytype') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'entrytype.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'entrytype.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'retrievedbycombined') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'retrievedbycombined.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'retrievedbycombined.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'countrylist') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'countrylist.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'countrylist.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'description') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'description.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'description.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'localitiesElementsInc') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'localitiesElementsInc.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsInc.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'localitiesElementsExc') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'localitiesElementsExc.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsExc.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'localitiesElementsIncExc') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'localitiesElementsIncExc.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'localitiesElementsIncExc.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'localitiesAge') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'localitiesAge.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'localitiesAge.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'mineralsImaList') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'mineralsImaList.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'mineralsImaList.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
	} else if (selectedFunction === 'mineralsImaRetrieve') {
		const jsonldData = generateJSONLDData(geomaterials, selectedFunction);
		// 检查当前平台并处理不同的逻辑
		if (process.env.VUE_APP_PLATFORM === 'h5') {
			// H5端下载 CSV 文件
			const link = document.createElement('a');
			link.setAttribute('href', jsonldData);
			link.setAttribute('download', 'mineralsImaRetrieve.rdf');
			document.body.appendChild(link); // Required for FF
			link.click();
			document.body.removeChild(link);
		} else {
			const jsonldData = generateJSONLDData(geomaterials, selectedFunction).replace(
				/^data:application\/ld\+json;charset=utf-8,/,
				'');
			const fileName = 'mineralsImaRetrieve.xml';

			// 获取文件系统对象
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
				// 创建文件
				fs.root.getFile(fileName, {
					create: true
				}, function(fileEntry) {
					// 创建写入流
					fileEntry.createWriter(function(writer) {
						writer.write(jsonldData);

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
}
