<template>
  <view class="home">
<!-- 	<h2 class="search-title"></h2> <!-- 添加的标题 --> 
    <!-- 搜索元素的输入和选择功能 -->
    <view class="element-selector">
      <input v-if="selectedFunction ==='contains' || selectedFunction ==='notContains' || selectedFunction ==='containAllButNot' || selectedFunction === 'containAllButNot' || selectedFunction ==='containOnlyElems'" class="element-input" type="text" v-model="elementInput" :placeholder="inputPlaceholder" />
      <input v-if="selectedFunction === 'containAllButNot'" class="element-input" type="text" v-model="excludeElementInput" placeholder="Enter elements to exclude (comma separated)" />
	  <input v-if="selectedFunction === 'hardnessGT'  || selectedFunction === 'hardnessRange'" class="element-input" type="text" step="any" v-model="minHardness" placeholder="Enter given hardness" />
	  <input v-if="selectedFunction === 'hardnessRange' || selectedFunction === 'hardnessLT'" class="element-input" type="text" step="any" v-model="maxHardness" placeholder="Enter given hardness" :key="selectedFunction" />
	  <input v-if="selectedFunction === 'densGT' || selectedFunction === 'densRange'" class="element-input" type="text" step="any" v-model="mindensity" placeholder="Enter given density" />
	   <input v-if="selectedFunction === 'densLT' || selectedFunction === 'densRange'" class="element-input" type="text" step="any" v-model="maxdensity" placeholder="Enter given density" :key="selectedFunction" />
	   <input v-if="selectedFunction === 'optical2vRange'" class="element-input" type="text" step="any" v-model="minoptical2v" placeholder="Enter given optical2v" />
	   <input v-if="selectedFunction === 'optical2vRange'" class="element-input" type="text" step="any" v-model="maxoptical2v" placeholder="Enter given optical2v" :key="selectedFunction" />
	   <input v-if="selectedFunction === 'csystem'" class="element-input" type="text" step="any" v-model="csystem" placeholder="Enter given csystem" :key="selectedFunction" />
	   <input v-if="selectedFunction === 'fracturetype'" class="element-input" type="text" step="any" v-model="fracturetype" placeholder="Enter given fracturetype" />
	   <input v-if="selectedFunction === 'colour'" class="element-input" type="text" step="any" v-model="colour" placeholder="Enter given colour" />
	   <input v-if="selectedFunction === 'streak'" class="element-input" type="text" step="any" v-model="streak" placeholder="Enter given streak" />
	   <input v-if="selectedFunction === 'diapheny'" class="element-input" type="text" step="any" v-model="diapheny" placeholder="Enter given diapheny" />
	   <input v-if="selectedFunction === 'lustretype'" class="element-input" type="text" step="any" v-model="lustretype" placeholder="Enter given lustretype" />
	   <input v-if="selectedFunction === 'opticalsign'" class="element-input" type="text" step="any" v-model="opticalsign" placeholder="Enter given opticalsign" />
	   <input v-if="selectedFunction === 'polytypeof'" class="element-input" type="text" step="any" v-model="polytypeof" placeholder="Enter given polytypeof" />
	   <input v-if="selectedFunction === 'cleavagetype'" class="element-input" type="text" step="any" v-model="cleavagetype" placeholder="Enter given cleavagetype" />
	   <input v-if="selectedFunction === 'name'" class="element-input" type="text" step="any" v-model="name" placeholder="Enter given name" />
	    <input v-if="selectedFunction === 'q'" class="element-input" type="text" step="any" v-model="q" placeholder="Enter given name" />
		<input v-if="selectedFunction === 'id'" class="element-input" type="text" step="any" v-model="id" placeholder="Enter given id" />
		<input v-if="selectedFunction === 'varietyof'" class="element-input" type="text" step="any" v-model="varietyof" placeholder="Enter given varietyof" />
		<input v-if="selectedFunction === 'entrytype'" class="element-input" type="text" step="any" v-model="entrytype" placeholder="Enter given entrytype" />
		<input v-if="selectedFunction === 'imastatus'" class="element-input" type="text" step="any" v-model="imastatus" placeholder="Enter given imastatus" />
		<input v-if="selectedFunction === 'retrievedbycombined'" class="element-input" type="text" step="any" v-model="elementInput" placeholder="Enter given element(comma separated)" />
		<input v-if="selectedFunction === 'retrievedbycombined'" class="element-input" type="text" v-model="excludeElementInput" placeholder="Enter elements to exclude (comma separated)" />
		<input v-if="selectedFunction === 'retrievedbycombined'" class="element-input" type="text" step="any" v-model="minHardness" placeholder="Enter given hardness_min" />
		<input v-if="selectedFunction === 'retrievedbycombined'" class="element-input" type="text" step="any" v-model="maxHardness" placeholder="Enter given hardness_max" />
		<input v-if="selectedFunction === 'retrievedbycombined'" class="element-input" type="text" step="any" v-model="csystem" placeholder="Enter given crystal_system" />
		<input v-if="selectedFunction === 'retrievedbycombined'" class="element-input" type="text" step="any" v-model="imastatus" placeholder="Enter given ima_status" />
		<input v-if="selectedFunction === 'retrievedbycombined'" class="element-input" type="text" step="any" v-model="entrytype" placeholder="Enter given entrytype" />
		<input v-if="selectedFunction === 'countrylist'" class="element-input" type="text" step="any" v-model="country" placeholder="Enter given country" />
		<input v-if="selectedFunction === 'localitiesid'" class="element-input" type="text" step="any" v-model="localitiesid" placeholder="Enter given id" />
		<input v-if="selectedFunction === 'description'" class="element-input" type="text" step="any" v-model="description" placeholder="Enter given description" />
		<input v-if="selectedFunction === 'localitiesElementsInc' || selectedFunction === 'localitiesElementsExc'" class="element-input" type="text" step="any" v-model="localitiesElementsInput" placeholder="Enter given chemical elements(comma separated)" />
		<input v-if="selectedFunction === 'localitiesElementsIncExc'" class="element-input" type="text" step="any" v-model="localitiesElementsInput" placeholder="Enter chemical elements(comma separated)" />

		<input v-if="selectedFunction === 'localitiesElementsIncExc'" class="element-input" type="text" v-model="localitiesExcludeElementInput" placeholder="Enter chemical elements to exclude (comma separated)" />
		<input v-if="selectedFunction === 'localitiesAge'" class="element-input" type="text" v-model="ageid" placeholder="Enter given age_id " />
	<!-- 	<input v-if="selectedFunction === 'mineralsImaList'" class="element-input" type="text" v-model="mineralsImaList" placeholder="Enter given age_id " /> -->
		<input v-if="selectedFunction === 'mineralsImaRetrieve'" class="element-input" type="text" v-model="imaid" placeholder="Enter given ima_id " />
		<picker mode="selector" :range="options" @change="handlePickerChange" range-key="value">
		  <view class="picker">
		    {{ selectedFunctionLabel }}
		  </view>
		</picker>
    </view>
    <!-- 搜索按钮 -->
    <view class="search-button">
      <button @click="executeFunction">Search</button>
	  <button @click="resetPageToInitialState">Reset</button>
      <button @click="openModal">Download</button> <!-- 下载按钮 -->
    
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <h3>Select File Format</h3>
          <button class="format-button" @click="downloadCSV">CSV</button>
          <button class="format-button" @click="downloadTXT">TXT</button>
          <button class="format-button" @click="downloadJSONLD">JSON-LD</button>
		  <button class="format-button" @click="downloadTTL">TTL</button>
		  <button class="format-button" @click="downloadRDF">RDF</button>
          <button class="cancel-button" @click="closeModal">Cancel</button>
        </div>
      </div>
    </view>
    <!-- 地质材料的展示部分 -->
    <view class="geomaterials-section" >
      <h3 v-if="selectedFunction === 'contains'">Materials containing {{ elementInput }}:</h3>
      <h3 v-else-if="selectedFunction === 'notContains'">Materials not containing {{ elementInput }}:</h3>
      <h3 v-else-if="selectedFunction === 'containAllButNot'">Materials containing {{ elementInput }} but not {{ excludeElementInput }}:</h3>
      <h3 v-else-if="selectedFunction === 'containOnlyElems'">Materials containing only {{ elementInput }}:</h3>
	  <h3 v-if="selectedFunction === 'hardnessGT'">Materials with hardness greater than {{ minHardness }}:</h3>
	  <h3 v-if="selectedFunction === 'hardnessLT'">Materials with hardness less than {{ maxHardness }}:</h3>
	  <h3 v-if="selectedFunction === 'hardnessRange'">Materials with hardness between {{ minHardness }} and {{ maxHardness }}:</h3>
	  <h3 v-if="selectedFunction === 'densGT'">Materials with density greater than {{ mindensity }}:</h3>
	  <h3 v-if="selectedFunction === 'densLT'">Materials with density less than {{ maxdensity }}:</h3>
	   <h3 v-if="selectedFunction === 'densRange'">Materials with density between {{ mindensity }} and {{ maxdensity }}:</h3>
	   <h3 v-if="selectedFunction === 'optical2vRange'">Materials with optical2v between {{ minoptical2v }} and {{ maxoptical2v }}:</h3>
	     <h3 v-if="selectedFunction === 'csystem'">Materials csystal_system {{csystem}} :</h3>
		 <h3 v-if="selectedFunction === 'fracturetype'">Materials fracturetype {{fracturetype}} :</h3>
		 <h3 v-if="selectedFunction === 'colour'">Materials colour {{colour}} :</h3>
		 <h3 v-if="selectedFunction === 'streak'">Materials streak {{streak}} :</h3>
		 <h3 v-if="selectedFunction === 'diapheny'">Materials diapheny {{diapheny}} :</h3>
		 <h3 v-if="selectedFunction === 'lustretype'">Materials lustretype {{lustretype}} :</h3>
		 <h3 v-if="selectedFunction === 'opticalsign'">Materials opticalsign {{opticalsign}} :</h3>
		 <h3 v-if="selectedFunction === 'polytypeof'">Materials polytypeof {{polytypeof}} :</h3>
		 <h3 v-if="selectedFunction === 'cleavagetype'">Materials cleavagetype {{cleavagetype}} :</h3>
		 <h3 v-if="selectedFunction === 'name'">Materials name {{name}} :</h3>
		 <h3 v-if="selectedFunction === 'q'">Materials searchName {{q}} :</h3>
		  <h3 v-if="selectedFunction === 'id'">Materials Mindat_id {{id}} :</h3>
		 <h3 v-if="selectedFunction === 'varietyof'">Materials varietyof {{varietyof}} :</h3>
		 <h3 v-if="selectedFunction === 'entrytype'">Materials entrytype {{entrytype}} :</h3>
		 <h3 v-if="selectedFunction === 'retrievedbycombined'">Materials retrieved by combined conditions:</h3>
		 <h3 v-if="selectedFunction === 'countrylist'">Materials countrylist:</h3>
		 <h3 v-if="selectedFunction === 'localitiesid'">Materials Localities_id:</h3>
		 <h3 v-if="selectedFunction === 'description'">Materials description:</h3>
		 <h3 v-if="selectedFunction === 'localitiesElementsInc'">Materials Localities_elements_inc:</h3>
		 <h3 v-if="selectedFunction === 'localitiesElementsExc'">Materials Localities_elements_exc:</h3>
		 <h3 v-if="selectedFunction === 'localitiesElementsIncExc'">Materials Localities_elements_inc_exc:</h3>
		 <h3 v-if="selectedFunction === 'localitiesAge'">Materials Localities_age:</h3>	
		 <h3 v-if="selectedFunction === 'mineralsImaList'">Materials minerals_ima_list:</h3>	
		 <h3 v-if="selectedFunction === 'mineralsImaRetrieve'">Materials minerals_ima_retrieve:</h3>
      <ul>
            <li v-for="(material, index) in geomaterials" :key="'material-' + index">
              <!-- <p><strong>Name:</strong> {{ material.name }}</p> -->
			  <template v-if="selectedFunction === 'contains' || selectedFunction === 'notContains' || selectedFunction === 'containAllButNot' || selectedFunction === 'containOnlyElems'">
				<p><strong>Name:</strong> {{ material.name }}</p>
			    <p><strong>Mindat Formula:</strong> {{ material.mindat_formula }}</p>
			    <p><strong>Elements:</strong> {{ material.elements }}</p>
			  </template>
              <template v-if="selectedFunction === 'hardnessGT' || selectedFunction === 'hardnessLT' || selectedFunction === 'hardnessRange'">
				<p><strong>Name:</strong> {{ material.name }}</p>
                <p><strong>Hardness Min:</strong> {{ material.hmin }}</p>
                <p><strong>Hardness Max:</strong> {{ material.hmax }}</p>
              </template>
			  <template v-if="selectedFunction === 'densGT' || selectedFunction ==='densLT'|| selectedFunction ==='densRange'">
				<p><strong>Name:</strong> {{ material.name }}</p> 
			    <p><strong>Density Min:</strong> {{ material.dmeas }}</p>
			    <p><strong>Density Max:</strong> {{ material.dmeas2 }}</p>
			  </template>
			  <template v-if="selectedFunction ==='optical2vRange' ">			
			    <p><strong>Name:</strong> {{ material.name }}</p>
			    <p><strong>Optical2v Min:</strong> {{ material.optical2vmeasured }}</p>
			    <p><strong>Optical2v Max:</strong> {{ material.optical2vmeasured2 }}</p>
			  </template>
			  <template v-if="selectedFunction === 'csystem'">
				<p><strong>Name:</strong> {{ material.name }}</p>
			    <p><strong>Elements:</strong> {{ material.elements }}</p>
			    <p><strong>Csystem:</strong> {{ material.csystem }}</p>
				<p><strong>Commentcrystal:</strong> {{ material.commentcrystal }}</p>
			  </template>
			  <template v-if="selectedFunction === 'fracturetype'">
				<p><strong>Name:</strong> {{ material.name }}</p>  
			    <p><strong>Elements:</strong> {{ material.elements }}</p>
			    <p><strong>Csystem:</strong> {{ material.csystem }}</p>
			  	<p><strong>Cleavagetype:</strong> {{ material.cleavagetype }}</p>
				<p><strong>Fracturetype:</strong> {{ material.fracturetype }}</p>
			  </template>
			  <template v-if="selectedFunction === 'colour'">
				<p><strong>Name:</strong> {{ material.name }}</p>  
			    <p><strong>Elements:</strong> {{ material.elements }}</p>
			    <p><strong>Csystem:</strong> {{ material.csystem }}</p>
			  	<p><strong>Colour:</strong> {{ material.colour }}</p>
			  </template>
			  <template v-if="selectedFunction === 'streak'">
				<p><strong>Name:</strong> {{ material.name }}</p>  
			    <p><strong>Elements:</strong> {{ material.elements }}</p>
			    <p><strong>Csystem:</strong> {{ material.csystem }}</p>
			  	<p><strong>Colour:</strong> {{ material.colour }}</p>
				<p><strong>Streak:</strong> {{ material.streak }}</p>
			  </template>
			  <template v-if="selectedFunction === 'diapheny'">
				<p><strong>Name:</strong> {{ material.name }}</p>  
			    <p><strong>Elements:</strong> {{ material.elements }}</p>
			    <p><strong>Csystem:</strong> {{ material.csystem }}</p>
			  	<p><strong>Colour:</strong> {{ material.colour }}</p>
			  	<p><strong>Diapheny:</strong> {{ material.diapheny }}</p>
			  </template>
			  <template v-if="selectedFunction === 'lustretype'">
				<p><strong>Name:</strong> {{ material.name }}</p>  
			    <p><strong>Elements:</strong> {{ material.elements }}</p>
			    <p><strong>Csystem:</strong> {{ material.csystem }}</p>
			  	<p><strong>Lustre:</strong> {{ material.lustre }}</p>
			  	<p><strong>Lustretype:</strong> {{ material.lustretype }}</p>
			  </template>
			  <template v-if="selectedFunction === 'opticalsign'">
				<p><strong>Name:</strong> {{ material.name }}</p>  
			    <p><strong>Elements:</strong> {{ material.elements }}</p>
				<p><strong>Colour:</strong> {{ material.colour }}</p>
			    <p><strong>Csystem:</strong> {{ material.csystem }}</p>
			  	<p><strong>Opticalsign:</strong> {{ material.opticalsign }}</p>
			  </template>
			  <template v-if="selectedFunction === 'polytypeof'">
				<p><strong>Name:</strong> {{ material.name }}</p>  
			    <p><strong>Elements:</strong> {{ material.elements }}</p>
			    <p><strong>Csystem:</strong> {{ material.csystem }}</p>
				<p><strong>Opticalbireflectance:</strong> {{ material.opticalbireflectance }}</p>
			  	<p><strong>Polytypeof:</strong> {{ material.polytypeof }}</p>
			  </template>
			  <template v-if="selectedFunction === 'cleavagetype'">
				<p><strong>Name:</strong> {{ material.name }}</p>  
			    <p><strong>Elements:</strong> {{ material.elements }}</p>
			    <p><strong>Csystem:</strong> {{ material.csystem }}</p>
			  	<p><strong>Cleavage:</strong> {{ material.cleavage }}</p>
			  	<p><strong>Cleavagetype:</strong> {{ material.cleavagetype }}</p>
			  </template>
			  <template v-if="selectedFunction === 'name'">
				<p><strong>Id:</strong> {{ material.id }}</p>
				<p><strong>Name:</strong> {{ material.name }}</p>
				<p><strong>elements:</strong> {{ material.elements }}</p>
				<p><strong>mindat_formula:</strong> {{ material.mindat_formula }}</p>
				<p><strong>Ima_status:</strong> {{ material.ima_status }}</p>
			  </template>
			  <template v-if="selectedFunction === 'q' || selectedFunction === 'id' ">
				  <p><strong>Id:</strong> {{ material.id }}</p>
				  <p><strong>Name:</strong> {{ material.name }}</p>
				</template>
			  <template v-if="selectedFunction === 'varietyof'">
			  	<p><strong>Id:</strong> {{ material.id }}</p>
			  	<p><strong>Name:</strong> {{ material.name }}</p>
				<p><strong>Varietyof:</strong> {{ material.varietyof }}</p>
			  </template>
			  <template v-if="selectedFunction === 'entrytype'">
			  	<p><strong>Id:</strong> {{ material.id }}</p>
			  	<p><strong>Name:</strong> {{ material.name }}</p>
			  	<p><strong>Entrytype:</strong> {{ material.entrytype }}</p>
			  </template>
			  <template v-if="selectedFunction === 'imastatus'">
				<p><strong>Id:</strong> {{ material.id }}</p>
			  	<p><strong>Name:</strong> {{ material.name }}</p>
			  	<p><strong>Elements:</strong> {{ material.elements }}</p>
				<p><strong>Ima_formula:</strong> {{ material.ima_formula }}</p>
				<p><strong>Ima_status:</strong> {{ material.ima_status }}</p>
			  </template>
			  <template v-if="selectedFunction === 'retrievedbycombined'">
			  	<p><strong>Id:</strong> {{ material.id }}</p>
			  	<p><strong>Name:</strong> {{ material.name }}</p>
				<p><strong>Elements:</strong> {{ material.elements }}</p>
				<p><strong>Hardness Min:</strong> {{ material.hmin }}</p>
				<p><strong>Hardness Max:</strong> {{ material.hmax }}</p>
				<p><strong>Csystem:</strong> {{ material.csystem }}</p>
				<p><strong>IMA_status:</strong> {{ material.ima_status }}</p>
				<p><strong>Entrytype:</strong> {{ material.entrytype }}</p>		
			  </template>
			  <template v-if="selectedFunction === 'countrylist' || selectedFunction === 'localitiesid'">
			  	<p><strong>Id:</strong> {{ material.id }}</p>
			  	<p><strong>Country:</strong> {{ material.country }}</p>
			  	<p><strong>Elements:</strong> {{ material.elements }}</p>
			  	<p><strong>Latitude:</strong> {{ material.latitude }}</p>
			  	<p><strong>Longitude:</strong> {{ material.longitude }}</p>
			  	<p><strong>Level:</strong> {{ material.level }}</p>
				<p><strong>Txt:</strong> {{ material.txt }}</p>
			  </template>
			  
			  <template v-if="selectedFunction === 'description'">
			  	<p><strong>Id:</strong> {{ material.id }}</p>
			  	<p><strong>Country:</strong> {{ material.country }}</p>
			  	<p><strong>Elements:</strong> {{ material.elements }}</p>
			  	<p><strong>Latitude:</strong> {{ material.latitude }}</p>
			  	<p><strong>Longitude:</strong> {{ material.longitude }}</p>
			  	<p><strong>Level:</strong> {{ material.level }}</p>
			  	<p><strong>Description_short:</strong> {{ material.description_short }}</p>
			  </template>
			  <template v-if="selectedFunction === 'localitiesElementsInc' || selectedFunction === 'localitiesElementsExc'||selectedFunction === 'localitiesElementsIncExc'">
			  	<p><strong>Id:</strong> {{ material.id }}</p>
			  	<p><strong>Country:</strong> {{ material.country }}</p>
			  	<p><strong>Elements:</strong> {{ material.elements }}</p>
			  	<p><strong>Latitude:</strong> {{ material.latitude }}</p>
			  	<p><strong>Longitude:</strong> {{ material.longitude }}</p>
			  	<p><strong>Level:</strong> {{ material.level }}</p>
			  	<p><strong>Txt:</strong> {{ material.txt }}</p>
			  </template>
			  <template v-if="selectedFunction === 'localitiesAge'">
			  	<p><strong>Age_id:</strong> {{ material.age_id }}</p>
			  	<p><strong>Age_mav:</strong> {{ material.age_mav }}</p>
			  	<p><strong>Age_ma2v:</strong> {{ material.age_ma2v }}</p>
			  	<p><strong>Agemethod:</strong> {{ material.agemethod }}</p>
			  </template>
			  <template v-if="selectedFunction === 'mineralsImaList'">
			  	<p><strong>Name:</strong> {{ material.name }}</p>
			  	<p><strong>Type_localities:</strong> {{ material.type_localities }}</p>
			  	<p><strong>Ima_formula:</strong> {{ material.ima_formula }}</p>
			  	<p><strong>Ima_status:</strong> {{ material.ima_status }}</p>
			  </template>
			  <template v-if="selectedFunction === 'mineralsImaRetrieve'">
				<p><strong>Id:</strong> {{ material.id }}</p>
			  	<p><strong>Name:</strong> {{ material.name }}</p>
			  	<p><strong>Mindat_formula:</strong> {{ material.mindat_formula }}</p>
			  	<p><strong>Ima_status:</strong> {{ material.ima_status }}</p>
				<p><strong>Elements:</strong> {{ material.elements }}</p>
				<p><strong>Sigelements:</strong> {{ material.sigelements }}</p>
			  </template>
			  
            </li>
          </ul>
    </view>
  </view>
</template>

<script>
  import Button from '@/components/button/button.vue'
  import { generateCSVData } from '@/Formatter.js';
  import { downloadDataCSV,downloadDataTXT,downloadDataTTL, downloadDataJSONLD, downloadDataRDF } from '@/Export.js';
  export default {data() {
      return {
    
		showModal: false, // 控制模态框显示
        geomaterials: [],
        elementInput: '', // 用户输入的元素
        excludeElementInput: '', // 用户输入的不包含的元素
		options: [
		  { label: 'geomaterials_contain_all_elements', value: 'contains' },
		  { label: 'geomaterials_not_contain_elements', value: 'notContains' },
		  { label: 'geomaterials_contain_all_but_not_elements', value: 'containAllButNot' },
		  { label: 'geomaterials_contain_only_elements', value: 'containOnlyElems' },
		  { label: 'geomaterials_hardness_greater_than', value: 'hardnessGT' },
		  { label: 'geomaterials_hardness_less_than', value: 'hardnessLT' },
		  { label: 'geomaterials_hardness_range', value: 'hardnessRange' },
		  { label: 'geomaterials_density_greater_than', value: 'densGT' },
		  { label: 'geomaterials_density_less_than', value: 'densLT' },
		  { label: 'geomaterials_density_range', value: 'densRange' },
		  { label: 'geomaterials_optical2v_range', value: 'optical2vRange' },
		  { label: 'geomaterials_crystal_system', value: 'csystem' },
		  { label: 'geomaterials_fracturetype', value: 'fracturetype' },
		  { label: 'geomaterials_colour', value: 'colour' },
		  { label: 'geomaterials_streak', value: 'streak' },
		  { label: 'geomaterials_diapheny', value: 'diapheny' },
		  { label: 'geomaterials_lustretype', value: 'lustretype' },
		  { label: 'geomaterials_opticalsign', value: 'opticalsign' },
		  { label: 'geomaterials_polytypeof', value: 'polytypeof' },
		  { label: 'geomaterials_cleavagetype', value: 'cleavagetype' },
		  { label: 'geomaterials_name', value: 'name' },
		  { label: 'geomaterials_search_name', value: 'q' },
		  { label: 'mindat_geomaterial', value: 'id' },
		  { label: 'geomaterials_varietyof', value: 'varietyof' },
		  { label: 'geomaterials_entrytype', value: 'entrytype' },
		  { label: 'geomaterials_imastatus', value: 'imastatus' },
		  { label: 'geomaterial_retrieved_by_combined_conditions', value: 'retrievedbycombined' },
		  { label: 'localities_country', value: 'countrylist'},
		  { label: 'localities_retrieve_id', value: 'localitiesid'},
		  { label: 'Localities_description', value: 'description'},
		  { label: 'Localities_elements_inc', value: 'localitiesElementsInc'},
		  { label: 'Localities_elements_exc', value: 'localitiesElementsExc'},
		  { label: 'Localities_elements_inc_exc', value: 'localitiesElementsIncExc'},
		  { label: 'Localities_age', value: 'localitiesAge'},
		  { label: 'minerals_ima_list', value: 'mineralsImaList'},
		  { label: 'minerals_ima_retrieve', value: 'mineralsImaRetrieve'},
		],
        selectedFunction: 'contains' ,// 默认选择包含元素的功能
		minHardness: null,
		maxHardness: null,
		mindensity:null,
		maxdensity:null,
		minoptical2v:null,
		maxoptical2v:null,
		csystem:null,
		fracturetype:null,
		colour:null,
		streak:null,
		diapheny:null,
		lustretype:null,
		opticalsign:null,
		polytypeof:null,
		cleavagetype:null,
		imastatus:null,
		name:null,
		q:null,
		id:null,
		varietyof:null,
		entrytype:null,
		imastatus:null,
		country:null,
		localitiesid:null,
		description:null,
		localitiesElementsInput:null,
		localitiesExcludeElementInput:null,
		ageid:null,
		imaid:null,
		cancelRequest: false, // 用于控制是否取消请求
      }
    },
    computed: {
		selectedFunctionLabel() {
		  const selectedOption = this.options.find(option => option.value === this.selectedFunction);
		  return selectedOption ? selectedOption.label : '';
		},
		// 根据选中的搜索功能设置输入框的占位符
      inputPlaceholder() {
        if (this.selectedFunction === 'containAllButNot') {
          return 'Enter elements to include (comma separated)';
        }
        return 'Enter elements (comma separated)';
      }
    },
    methods: {
		resetPageToInitialState() {
		      this.geomaterials = []; // 清空查询结果
			  this.elementInput ='';// 用户输入的元素
			  this.excludeElementInput= ''; // 用户输入的不包含的元素
			  this.minHardness=null;
			  this.maxHardness=null;
			  this.mindensity=null;
			  this.maxdensity=null;
			  this.minoptical2v=null;
			  this.maxoptical2v=null;
			  this.csystem=null;
			  this.fracturetype=null;
			  this.colour=null;
			  this.streak=null;
			  this.diapheny=null;
			  this.lustretype=null;
			  this.opticalsign=null;
			  this.polytypeof=null;
			  this.cleavagetype=null;
			  this.name=null;
			  this.q=null;
			  this.id=null;
			  this.varietyof=null;
			  this.entrytype=null;
			  this.imastatus=null;
			  this.country=null;
			  this.localitiesid=null;
			  this.description=null;
			  this.localitiesElementsInput=null;
			  this.localitiesExcludeElementInput=null;
			  this.ageid=null;
			  this.imaid=null;
			  this.cancelRequest = true;
		    },
		openModal() {
		  this.showModal = true; // 打开模态框
		},
		closeModal() {
		  this.showModal = false; // 关闭模态框
		},
		handlePickerChange(event) {
		  // 获取选中的索引
		  const index = event.detail.value;
		  // 根据索引从options中获取相应的value并赋值给selectedFunction
		  this.selectedFunction = this.options[index].value;
		  console.log('Selected value:', this.selectedFunction); // 控制台显示选中的值
		},
	  // 根据选择的功能执行相应的搜索操作
      executeFunction() {
        if (this.selectedFunction === 'contains') {
          this.fetchGeomaterials();        // 调用 fetchGeomaterials 方法获取包含指定元素的地质材料
        } else if (this.selectedFunction === 'notContains') {
          this.fetchGeomaterialsNotContain();    // 调用 fetchGeomaterialsNotContain 方法获取不包含指定元素的地质材料
        } else if (this.selectedFunction === 'containAllButNot') {
          this.fetchGeomaterialsContainAllButNot();    // 调用 fetchGeomaterialsContainAllButNot 方法获取包含指定元素但不包含排除元素的地质材料
        } else if (this.selectedFunction === 'containOnlyElems') {
          // 调用包含只有指定元素的地质材料的函数
          this.fetchGeomaterialsContainOnlyElems();
		  }
		  else if (this.selectedFunction === 'hardnessGT') {
		    this.fetchMaterials();
		  } else if (this.selectedFunction === 'hardnessLT') {
		    this.fetchMaterialsLt();
		  } else if (this.selectedFunction === 'hardnessRange') {
		    this.fetchMaterialsRange();
			}
			else if(this.selectedFunction === 'densGT') {
			this.fetchDensGT();
			}
			else if(this.selectedFunction === 'densLT') {
			this.fetchDensLT();
			}
			else if(this.selectedFunction === 'densRange') {
			this.fetchDensRange();
			}
			else if(this.selectedFunction === 'optical2vRange') {
			this.fetchoptical2vRange();
			}
			else if(this.selectedFunction === 'csystem') {
			this.fetchCsystem();
			}
			else if(this.selectedFunction === 'fracturetype') {
			this.fetchFracturetype();
			}
			else if(this.selectedFunction === 'colour') {
			this.fetchColour();
			}
			else if(this.selectedFunction === 'streak') {
			this.fetchStreak();
			}
			else if(this.selectedFunction === 'diapheny') {
			this.fetchDiapheny();
			}
			else if(this.selectedFunction === 'lustretype') {
			this.fetchLustretype();
			}
			else if(this.selectedFunction === 'opticalsign') {
			this.fetchOpticalsign();
			}
			else if(this.selectedFunction === 'polytypeof') {
			this.fetchPolytypeof();
			}
			else if(this.selectedFunction === 'cleavagetype') {
			this.fetchCleavagetype();
			}
			else if(this.selectedFunction === 'name') {
			this.fetchName();
			}
			else if(this.selectedFunction === 'q') {
			this.fetchSearchName();
			}
			else if(this.selectedFunction === 'id') {
			this.fetchId();
			}
			else if(this.selectedFunction === 'varietyof') {
			this.fetchVarietyof();
			}
			else if(this.selectedFunction === 'entrytype') {
			this.fetchEntrytype();
			}
			else if(this.selectedFunction === 'imastatus') {
			this.fetchImastatus();
			}
			else if(this.selectedFunction === 'retrievedbycombined') {
			this.fetchCombined();
			}
			else if(this.selectedFunction === 'countrylist') {
			this.fetchCountrylist();
			}
			else if(this.selectedFunction === 'localitiesid') {
			this.fetchLocalitiesid();
			}
			else if(this.selectedFunction === 'description') {
			this.fetchDescription();
			}
			else if(this.selectedFunction === 'localitiesElementsInc') {
			this.fetchLocalitiesElementsInc();
			}
			else if(this.selectedFunction === 'localitiesElementsExc') {
			this.fetchLocalitiesElementsExc();
			}
			else if(this.selectedFunction === 'localitiesElementsIncExc') {
			this.fetchLocalitiesElementsIncExc();
			}
			else if(this.selectedFunction === 'localitiesAge') {
			this.fetchLocalitiesAge();
			}
			else if(this.selectedFunction === 'mineralsImaList') {
			this.fetchMineralsImaList();
			}
			else if(this.selectedFunction === 'mineralsImaRetrieve') {
			this.fetchMineralsImaRetrieve();
			}
      },
		  
      fetchGeomaterials() {
        const elements = this.elementInput.split(',').map(el => el.trim()); // 解析用户输入的元素
        this.geomaterials = []; // 清空之前的数据
        this.fetchGeomaterialsPage('https://api.mindat.org/geomaterials/', elements);
		this.cancelRequest = false; // 重置取消标志为 false
      },
      fetchGeomaterialsPage(url, elements) {
        uni.request({
          url: url,
          method: 'GET',
          header: {
            'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
          },
          data: {
            elements_inc: elements.join(',')
          },
          success: (res) => {
			if (this.cancelRequest) {
			          console.log('Request canceled after receiving response.');
			          return; // 如果取消标志为 true，直接返回
			        }  
            console.log('Fetched page:', res.data);
            const results = res.data.results;
            // 将当前页的结果添加到 geomaterials 中，并确保包含所需的属性
            results.forEach(material => {
              this.geomaterials.push({
                name: material.name,
                mindat_formula: material.mindat_formula,
                elements: material.elements
              });
            });

            // 如果有下一页，则递归调用 fetchGeomaterialsPage
            if (res.data.next) {
              this.fetchGeomaterialsPage(res.data.next, elements);
            }
          },
          fail: (err) => {
            console.error('Error fetching geomaterials:', err);
          }
        });
      },
      fetchGeomaterialsNotContain() {
        const elements = this.elementInput.split(',').map(el => el.trim()); // 解析用户输入的元素
        this.geomaterials = []; // 清空之前的数据
        this.fetchGeomaterialsNotContainPage('https://api.mindat.org/geomaterials/', elements);
		this.cancelRequest = false; // 重置取消标志为 false
      },
      fetchGeomaterialsNotContainPage(url, elements) {
        uni.request({
          url: url,
          method: 'GET',
          header: {
            'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
          },
          data: {
            elements_exc: elements.join(',')
          },
          success: (res) => {
			if (this.cancelRequest) {
			          console.log('Request canceled after receiving response.');
			          return; // 如果取消标志为 true，直接返回
			        }
            console.log('Fetched page (not contain):', res.data);
            const results = res.data.results;
            // 将当前页的结果添加到 geomaterials 中，并确保包含所需的属性
            results.forEach(material => {
              this.geomaterials.push({
                name: material.name,
                mindat_formula: material.mindat_formula,
                elements: material.elements
              });
            });

            // 如果有下一页，则递归调用 fetchGeomaterialsNotContainPage
            if (res.data.next) {
              this.fetchGeomaterialsNotContainPage(res.data.next, elements);
            }
          },
          fail: (err) => {
            console.error('Error fetching geomaterials (not contain):', err);
          }
        });
      },
	fetchGeomaterialsContainAllButNot() {
	      const includeElements = this.elementInput.split(',').map(el => el.trim());
	      const excludeElements = this.excludeElementInput.split(',').map(el => el.trim());
	      this.geomaterials = [];
	      this.fetchGeomaterialsContainAllButNotPage('https://api.mindat.org/geomaterials/', includeElements, excludeElements);
		  this.cancelRequest = false; // 重置取消标志为 false
	    },
	fetchGeomaterialsContainAllButNotPage(url, includeElements, excludeElements) {
	      uni.request({
	        url: url,
	        method: 'GET',
	        header: {
	          'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	        },
	        data: {
	          elements_inc: includeElements.join(','),
	          elements_exc: excludeElements.join(',')
	        },
	        success: (res) => {
			  if (this.cancelRequest) {
			            console.log('Request canceled after receiving response.');
			            return; // 如果取消标志为 true，直接返回
			          }
			  console.log('Fetched page(contain all but not):',res.data);
	          const results = res.data.results;
	          results.forEach(material => {
	            this.geomaterials.push({
	              name: material.name,
	              mindat_formula: material.mindat_formula,
	              elements: material.elements
	            });
	          });
	          if (res.data.next) {
	            this.fetchGeomaterialsContainAllButNotPage(res.data.next, includeElements, excludeElements);
	          }
	        },
	        fail: (err) => {
	          console.error('Error fetching geomaterials (contain all but not):', err);
	        }
	      });
	    },
		
		fetchMaterials() {
		  this.geomaterials = [];
		  this.fetchMaterialsPage('https://api.mindat.org/geomaterials/')
		  this.cancelRequest = false; // 重置取消标志为 false
		},
		fetchMaterialsPage(url) {
		  uni.request({
		    url: url,
		    method: 'GET',
		    header: {
		      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
		    },
		    data: {
		      hardness_min: this.minHardness
		    },
		    success: (res) => {
			  if (this.cancelRequest) {
			            console.log('Request canceled after receiving response.');
			            return; // 如果取消标志为 true，直接返回
			          }
		      console.log('Fetched page (hardnessGT):', res.data);
		      const results = res.data.results;
		      results.forEach(material => {
		        this.geomaterials.push({
		          name: material.name,
		          hmin: material.hmin,
		          hmax: material.hmax
		        });
		      });
		      if (res.data.next) {
		        this.fetchMaterialsPage(res.data.next);
		      }
		    },
		    fail: (err) => {
		      console.error('Error fetching materials (hardnessGT):', err);
		    }
		  });
		},
		fetchMaterialsLt() {
		  this.geomaterials = [];
		  this.fetchMaterialsLTPage('https://api.mindat.org/geomaterials/')
		  this.cancelRequest = false; // 重置取消标志为 false
		},
		fetchMaterialsLTPage(url) {
		  uni.request({
		    url: url,
		    method: 'GET',
		    header: {
		      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
		    },
		    data: {
		      hardness_max: this.maxHardness
		    },
		    success: (res) => {
			  if (this.cancelRequest) {
			            console.log('Request canceled after receiving response.');
			            return; // 如果取消标志为 true，直接返回
			          }
		      console.log('Fetched page (hardnessLT):', res.data);
		      const results = res.data.results;
		      results.forEach(material => {
		        this.geomaterials.push({
		          name: material.name,
		          hmin: material.hmin,
		          hmax: material.hmax
		        });
		      });
		      if (res.data.next) {
		        this.fetchMaterialsLTPage(res.data.next);
		      }
		    },
		    fail: (err) => {
		      console.error('Error fetching materials (hardnessLT):', err);
		    }
		  });
		},
		fetchMaterialsRange(){
			this.geomaterials = [];
			this.fetchMaterialsRangePage('https://api.mindat.org/geomaterials/')
			this.cancelRequest = false; // 重置取消标志为 false
		},
		fetchMaterialsRangePage(url) {
		  uni.request({
		    url: url,
		    method: 'GET',
		    header: {
		      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
		    },
		    data: {
		      hardness_min: this.minHardness,
		      hardness_max: this.maxHardness
		    },
		    success: (res) => {
			  if (this.cancelRequest) {
			            console.log('Request canceled after receiving response.');
			            return; // 如果取消标志为 true，直接返回
			          }
		      console.log('Fetched page (hardnessRange):', res.data);
		      const results = res.data.results;
		      results.forEach(material => {
		        this.geomaterials.push({
		          name: material.name,
		          hmin: material.hmin,
		          hmax: material.hmax
		        });
		      });
		      if (res.data.next) {
		        this.fetchMaterialsRangePage(res.data.next);
		      }
		    },
		    fail: (err) => {
		      console.error('Error fetching materials (hardnessRange):', err);
		    }
		  });
		},

	fetchGeomaterialsContainOnlyElems() {
	  const elements = this.elementInput.split(',').map(el => el.trim());
	  const all_minerals = [
	    'H', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Cs', 'Ba', 'La', 'Ce', 'Nd', 'Sm', 'Gd', 'Dy', 'Er', 'Yb', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Th', 'U'
	  ];
	  const excludeElements = all_minerals.filter(el => !elements.includes(el));
	  this.geomaterials = []; // 清空之前的数据
	  this.fetchGeomaterialsContainOnlyElemsPage('https://api.mindat.org/geomaterials/', elements, excludeElements);
	  this.cancelRequest = false; // 重置取消标志为 false
	  },
	  fetchGeomaterialsContainOnlyElemsPage(url, elements, excludeElements) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      elements_inc: elements.join(','),
	      elements_exc: excludeElements.join(',')
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (contain only elems):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	            this.geomaterials.push({
	              name: material.name,
	              mindat_formula: material.mindat_formula,
	              elements: material.elements
	            });
	      });
		  if (res.data.next) {
		          this.fetchGeomaterialsContainOnlyElemsPage(res.data.next, elements, excludeElements);
		        }
	    },
	    fail: (err) => {
	      console.error('Error fetching geomaterials (contain only elems):', err);
	    }
	  });
	},
	fetchDensGT() {
	  this.geomaterials = [];
	  this.fetchDensGTPage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchDensGTPage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      density_min: this.mindensity
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (densGT):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
	          name: material.name,
	          dmeas: material.dmeas,
	          dmeas2: material.dmeas2
	        });
	      });
	      if (res.data.next) {
	        this.fetchDensGTPage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (densGT):', err);
	    }
	  });
	},
	fetchDensLT() {
	  this.geomaterials = [];
	  this.fetchDensLTPage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchDensLTPage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      density_max: this.maxdensity
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (densLT):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
	          name: material.name,
	          dmeas: material.dmeas,
	          dmeas2: material.dmeas2
	        });
	      });
	      if (res.data.next) {
	        this.fetchDensLTPage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (densLT):', err);
	    }
	  });
	},
	fetchDensRange(){
		this.geomaterials = [];
		this.fetchDensRangePage('https://api.mindat.org/geomaterials/')
		this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchDensRangePage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      density_min: this.mindensity,
	      density_max: this.maxdensity
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (densityRange):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
	          name: material.name,
	          dmeas: material.dmeas,
	          dmeas2: material.dmeas2
	        });
	      });
	      if (res.data.next) {
	        this.fetchDensRangePage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (densRange):', err);
	    }
	  });
	},
	fetchoptical2vRange(){
		this.geomaterials = [];
		this.fetchoptical2vRangePage('https://api.mindat.org/geomaterials/')
		this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchoptical2vRangePage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      optical2v_min: this.minoptical2v,
	      optical2v_max: this.maxoptical2v
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (optical2vRange):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
	          name: material.name,
	          optical2vmeasured: material.optical2vmeasured,
	          optical2vmeasured2: material.optical2vmeasured2
	        });
	      });
	      if (res.data.next) {
	        this.fetchMaterialsRangePage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (optical2vRange):', err);
	    }
	  });
	},
	fetchCsystem() {
	  this.geomaterials = [];
	  this.fetchCsystemPage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchCsystemPage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      crystal_system: this.csystem
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (csystem):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
	          name: material.name,
	          elements: material.elements,
	          csystem: material.csystem,
			  commentcrystal:material.commentcrystal,
	        });
	      });
	      if (res.data.next) {
	        this.fetchCsystemPage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (csystem):', err);
	    }
	  });
	},
	fetchFracturetype() {
	  this.geomaterials = [];
	  this.fetchFracturetypePage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchFracturetypePage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      fracturetype: this.fracturetype
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (fracturetype):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
	          name: material.name,
	          elements: material.elements,
	          csystem: material.csystem,
			  cleavagetype: material.cleavagetype,
			  fracturetype: material.fracturetype,
	        });
	      });
	      if (res.data.next) {
	        this.fetchFracturetypePage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (fracturetype):', err);
	    }
	  });
	},
	fetchColour() {
	  this.geomaterials = [];
	  this.fetchColourPage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchColourPage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      colour: this.colour
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (colour):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
	          name: material.name,
	          elements: material.elements,
	          csystem: material.csystem,
			  colour: material.colour,
	        });
	      });
	      if (res.data.next) {
	        this.fetchColourPage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (colour):', err);
	    }
	  });
	},
	fetchStreak() {
	  this.geomaterials = [];
	  this.fetchStreakPage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchStreakPage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      streak: this.streak
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (streak):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
	          name: material.name,
	          elements: material.elements,
	          csystem: material.csystem,
			  colour: material.colour,
			  streak:material.streak,
	        });
	      });
	      if (res.data.next) {
	        this.fetchStreakPage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (streak):', err);
	    }
	  });
	},
	fetchDiapheny() {
	  this.geomaterials = [];
	  this.fetchDiaphenyPage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchDiaphenyPage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      diapheny: this.diapheny
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (diapheny):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
	          name: material.name,
	          elements: material.elements,
	          csystem: material.csystem,
			  colour: material.colour,
			  diapheny:material.diapheny,
	        });
	      });
	      if (res.data.next) {
	        this.fetchDiaphenyPage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (diapheny):', err);
	    }
	  });
	},
	fetchLustretype() {
	  this.geomaterials = [];
	  this.fetchLustretypePage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchLustretypePage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      lustretype: this.lustretype
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (lustretype):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
	          name: material.name,
	          elements: material.elements,
	          csystem: material.csystem,
			  lustre: material.lustre,
			  lustretype:material.lustretype,
	        });
	      });
	      if (res.data.next) {
	        this.fetchLustretypePage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (lustretype):', err);
	    }
	  });
	},
	fetchOpticalsign() {
	  this.geomaterials = [];
	  this.fetchOpticalsignPage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchOpticalsignPage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      opticalsign: this.opticalsign
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (opticalsign):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
	          name: material.name,
	          elements: material.elements,
	          colour: material.colour,
			  csystem: material.csystem,
			  opticalsign:material.opticalsign,
	        });
	      });
	      if (res.data.next) {
	        this.fetchOpticalsignPage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (opticalsign):', err);
	    }
	  });
	},
	fetchPolytypeof() {
	  this.geomaterials = [];
	  this.fetchPolytypeofPage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchPolytypeofPage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      polytypeof: this.polytypeof
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (polytypeof):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
	          name: material.name,
	          elements: material.elements,
			  csystem: material.csystem,
			  opticalbireflectance: material.opticalbireflectance,
			  polytypeof:material.polytypeof,
	        });
	      });
	      if (res.data.next) {
	        this.fetchPolytypeofPage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (polytypeof):', err);
	    }
	  });
	},
	fetchCleavagetype() {
	  this.geomaterials = [];
	  this.fetchCleavagetypePage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchCleavagetypePage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      cleavagetype: this.cleavagetype
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (cleavagetype):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
	          name: material.name,
	          elements: material.elements,
			  csystem: material.csystem,
			  cleavage: material.cleavage,
			  cleavagetype:material.cleavagetype,
	        });
	      });
	      if (res.data.next) {
	        this.fetchCleavagetypePage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (cleavagetype):', err);
	    }
	  });
	},
	fetchName() {
	  this.geomaterials = [];
	  this.fetchNamePage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchNamePage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      name: this.name
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (name):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
			  id: material.id,
	          name: material.name,
	          elements:material.elements,
			  mindat_formula:material.mindat_formula,
			  ima_status:material.ima_status
	        });
	      });
	      if (res.data.next) {
	        this.fetchNamePage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (name):', err);
	    }
	  });
	},
	fetchSearchName() {
	  this.geomaterials = [];
	  this.fetchSearchNamePage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchSearchNamePage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      q: this.q
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (searchname):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
			  id: material.id,
	          name: material.name,
	          
	        });
	      });
	      if (res.data.next) {
	        this.fetchSearchNamePage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (searchname):', err);
	    }
	  });
	},
	// fetchId() {
	//   this.geomaterials = [];
	//   this.fetchIdPage(`https://api.mindat.org/geomaterials/${this.id}/`)
	// },
	fetchId(url) {
	this.geomaterials = [];
	  uni.request({
	    url: `https://api.mindat.org/geomaterials/${this.id}/`,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      id: this.id
	    },
	    success: (res) => {
	      console.log('Fetched page (id):', res.data);
	      const material = res.data;
	      // results.forEach(material => {
	        this.geomaterials.push({
			  id: material.id,
	          name: material.name,
	        });
	      // });
	      // if (res.data.next) {
	      //   this.fetchIdPage(res.data.next);
	      // }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (id):', err);
	    }
	  });
	},
	fetchVarietyof() {
	  this.geomaterials = [];
	  this.fetchVarietyofPage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchVarietyofPage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      varietyof: this.varietyof
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (varietyof):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
			  id: material.id,
	          name: material.name,
			  varietyof:material.varietyof,
	          
	        });
	      });
	      if (res.data.next) {
	        this.fetchVarietyofPage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (varietyof):', err);
	    }
	  });
	},
	fetchEntrytype() {
	  this.geomaterials = [];
	  this.fetchEntrytypePage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchEntrytypePage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      entrytype: this.entrytype
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (entrytype):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
			  id: material.id,
	          name: material.name,
			  entrytype:material.entrytype,
	          
	        });
	      });
	      if (res.data.next) {
	        this.fetchEntrytypePage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (entrytype):', err);
	    }
	  });
	},
	fetchImastatus() {
	  this.geomaterials = [];
	  this.fetchImastatusPage('https://api.mindat.org/geomaterials/')
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchImastatusPage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      ima_status: this.imastatus
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (imastatus):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
			  id: material.id,
			  name: material.name,
	          elements: material.elements,
			  ima_formula:material.ima_formula,
			  ima_status:material.ima_status,
	        });
	      });
	      if (res.data.next) {
	        this.fetchImastatusPage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (imastatus):', err);
	    }
	  });
	},
	fetchCombined() {
	  const elements = this.elementInput.split(',').map(el => el.trim()); // 解析用户输入的元素
	  this.geomaterials = []; // 清空之前的数据
	  this.fetchCombinedPage('https://api.mindat.org/geomaterials/', elements);
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	
	fetchCombinedPage(url, elements) {
	  // 动态构建请求的参数对象
	  const params = {
	    elements_inc: elements.join(','),
	  };
	if(this.excludeElementInput){
		params.elements_exc = this.excludeElementInput;
	}
	  // 只在有值时添加查询条件
	  if (this.minHardness) {
	    params.hardness_min = this.minHardness;
	  }
	  if (this.maxHardness) {
	    params.hardness_max = this.maxHardness;
	  }
	  if (this.csystem) {
	    params.crystal_system = this.csystem;
	  }
	  if (this.imastatus) {
	    params.ima_status = this.imastatus;
	  }
	  if (this.entrytype) {
	    params.entrytype = this.entrytype;
	  }
	
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: params, // 使用动态构建的参数
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (combine):', res.data);
	      const results = res.data.results;
	      // 将当前页的结果添加到 geomaterials 中，并确保包含所需的属性
	      results.forEach(material => {
	        this.geomaterials.push({
	          id: material.id,
	          name: material.name,
	          elements: material.elements,
	          hmin: material.hmin,
	          hmax: material.hmax,
	          csystem: material.csystem,
	          ima_status: material.ima_status,
	          entrytype: material.entrytype,
	        });
	      });
	
	      // 如果有下一页，则递归调用 fetchCombinedPage
	      if (res.data.next) {
	        this.fetchCombinedPage(res.data.next, elements);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching geomaterials (combine):', err);
	    }
	  });
	},
	fetchCountrylist() {
	  this.geomaterials = [];
	  this.fetchCountrylistPage("https://api.mindat.org/localities/")
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchCountrylistPage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      country: this.country
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (countrylist):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
			  id: material.id,
	          country: material.country,
			  elements:material.elements,
			  latitude:material.latitude,
			  longitude:material.longitude,
			  level:material.level,
			  txt:material.txt,
	          
	        });
	      });
	      if (res.data.next) {
	        this.fetchCountrylistPage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching localities (countrylist):', err);
	    }
	  });
	},
	fetchLocalitiesid(url) {
	this.geomaterials = [];
	  uni.request({
	    url: `https://api.mindat.org/localities/${this.localitiesid}/`,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      id: this.localitiesid
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (id):', res.data);
	      const material = res.data;
	      // results.forEach(material => {
	        this.geomaterials.push({
			  id: material.id,
			  country: material.country,
			  elements:material.elements,
			  latitude:material.latitude,
			  longitude:material.longitude,
			  level:material.level,
			  txt:material.txt,
	        });
	      // });
	      // if (res.data.next) {
	      //   this.fetchIdPage(res.data.next);
	      // }
	    },
	    fail: (err) => {
	      console.error('Error fetching materials (localitiesid):', err);
	    }
	  });
	},
	fetchDescription() {
	  this.geomaterials = [];
	  this.fetchDescriptionPage("https://api.mindat.org/localities/")
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchDescriptionPage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      description: this.description
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (description):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
			  id: material.id,
	          country: material.country,
			  elements:material.elements,
			  latitude:material.latitude,
			  longitude:material.longitude,
			  level:material.level,
			  description_short:material.description_short,
	          
	        });
	      });
	      if (res.data.next) {
	        this.fetchDescriptionPage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching localities (description):', err);
	    }
	  });
	},
	fetchLocalitiesElementsInc() {
	  const elements = this.localitiesElementsInput.split(',').map(el => el.trim()); // 解析用户输入的元素
	  this.geomaterials = []; // 清空之前的数据
	  this.fetchLocalitiesElementsIncPage('https://api.mindat.org/localities/', elements);
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchLocalitiesElementsIncPage(url, elements) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      elements_inc: elements.join(',')
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (localitiesElementsInc):', res.data);
	      const results = res.data.results;
	      // 将当前页的结果添加到 geomaterials 中，并确保包含所需的属性
	      results.forEach(material => {
	        this.geomaterials.push({
	         id: material.id,
	         country: material.country,
	         elements:material.elements,
	         latitude:material.latitude,
	         longitude:material.longitude,
	         level:material.level,
	         txt:material.txt,
	        });
	      });

	      if (res.data.next) {
	        this.fetchLocalitiesElementsIncPage(res.data.next, elements);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching localities (localitiesElementsInc):', err);
	    }
	  });
	},
	fetchLocalitiesElementsExc() {
	  const elements = this.localitiesElementsInput.split(',').map(el => el.trim()); // 解析用户输入的元素
	  this.geomaterials = []; // 清空之前的数据
	  this.fetchLocalitiesElementsExcPage('https://api.mindat.org/localities/', elements);
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchLocalitiesElementsExcPage(url, elements) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      elements_exc: elements.join(',')
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (localitiesElementsExc):', res.data);
	      const results = res.data.results;
	      // 将当前页的结果添加到 geomaterials 中，并确保包含所需的属性
	      results.forEach(material => {
	        this.geomaterials.push({
	         id: material.id,
	         country: material.country,
	         elements:material.elements,
	         latitude:material.latitude,
	         longitude:material.longitude,
	         level:material.level,
	         txt:material.txt,
	        });
	      });
	
	      if (res.data.next) {
	        this.fetchLocalitiesElementsExcPage(res.data.next, elements);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching localities (localitiesElementsExc):', err);
	    }
	  });
	},
	fetchLocalitiesElementsIncExc() {
	      const includeElements = this.localitiesElementsInput.split(',').map(el => el.trim());
	      const excludeElements = this.localitiesExcludeElementInput.split(',').map(el => el.trim());
	      this.geomaterials = [];
	      this.fetchLocalitiesElementsIncExcPage('https://api.mindat.org/localities/', includeElements, excludeElements);
		  this.cancelRequest = false; // 重置取消标志为 false
	    },
	fetchLocalitiesElementsIncExcPage(url, includeElements, excludeElements) {
	      uni.request({
	        url: url,
	        method: 'GET',
	        header: {
	          'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	        },
	        data: {
	          elements_inc: includeElements.join(','),
	          elements_exc: excludeElements.join(',')
	        },
	        success: (res) => {
			  if (this.cancelRequest) {
			            console.log('Request canceled after receiving response.');
			            return; // 如果取消标志为 true，直接返回
			          }
			  console.log('Fetched page(localitiesElementsIncExc):',res.data);
	          const results = res.data.results;
	          results.forEach(material => {
	            this.geomaterials.push({
	              id: material.id,
	              country: material.country,
	              elements:material.elements,
	              latitude:material.latitude,
	              longitude:material.longitude,
	              level:material.level,
	              txt:material.txt,
	            });
	          });
	          if (res.data.next) {
	            this.fetchLocalitiesElementsIncExcPage(res.data.next, includeElements, excludeElements);
	          }
	        },
	        fail: (err) => {
	          console.error('Error fetching localities (localitiesElementsIncExc):', err);
	        }
	      });
	    },
	fetchLocalitiesAge(url) {
	this.geomaterials = [];
	  uni.request({
	    url: `https://api.mindat.org/locality_age/${this.ageid}/`,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      age_id: this.ageid
	    },
	    success: (res) => {
		  if (this.cancelRequest) {
		            console.log('Request canceled after receiving response.');
		            return; // 如果取消标志为 true，直接返回
		          }
	      console.log('Fetched page (localitiesAge):', res.data);
	      const material = res.data;
	      // results.forEach(material => {
	        this.geomaterials.push({
			  age_id: material.age_id,
			  age_mav: material.age_mav,
			  age_ma2v:material.age_ma2v,
			  agemethod:material.agemethod,
	        });
	      // });
	      // if (res.data.next) {
	      //   this.fetchIdPage(res.data.next);
	      // }
	    },
	    fail: (err) => {
	      console.error('Error fetching localities (localitiesAge):', err);
	    }
	  });
	},
	fetchMineralsImaList() {
	  this.geomaterials = [];
	  this.fetchMineralsImaListPage("https://api.mindat.org/minerals_ima/")
	  this.cancelRequest = false; // 重置取消标志为 false
	},
	fetchMineralsImaListPage(url) {
	  uni.request({
	    url: url,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      // description: this.description
	    },
	    success: (res) => {
			if (this.cancelRequest) {
			          console.log('Request canceled after receiving response.');
			          return; // 如果取消标志为 true，直接返回
			        }
	      console.log('Fetched page (mineralsImaList):', res.data);
	      const results = res.data.results;
	      results.forEach(material => {
	        this.geomaterials.push({
			  name: material.name,
	          type_localities: material.type_localities,
			  ima_formula:material.ima_formula,
			  ima_status:material.ima_status,

	          
	        });
	      });
	      if (res.data.next) {
	        this.fetchMineralsImaListPage(res.data.next);
	      }
	    },
	    fail: (err) => {
	      console.error('Error fetching IMA (mineralsImaList):', err);
	    }
	  });
	},
	fetchMineralsImaRetrieve(url) {
	this.geomaterials = [];
	  uni.request({
	    url: `https://api.mindat.org/minerals_ima/${this.imaid}/`,
	    method: 'GET',
	    header: {
	      'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	    },
	    data: {
	      id: this.imaid
	    },
	    success: (res) => {
	      console.log('Fetched page (mineralsImaRetrieve):', res.data);
	      const material = res.data;
	      // results.forEach(material => {
	        this.geomaterials.push({
			  id: material.id,
			  name: material.name,
			  mindat_formula:material.mindat_formula,
			  ima_status:material.ima_status,
			  elements:material.elements,
			  sigelements:material.sigelements,
	        });
	      // });
	      // if (res.data.next) {
	      //   this.fetchIdPage(res.data.next);
	      // }
	    },
	    fail: (err) => {
	      console.error('Error fetching IMA (mineralsImaRetrieve):', err);
	    }
	  });
	},
	
	downloadCSV(){
		downloadDataCSV(this.geomaterials,this.selectedFunction);
		
	},
	downloadTXT(){
		downloadDataTXT(this.geomaterials,this.selectedFunction);
	},
	downloadTTL(){
		downloadDataTTL(this.geomaterials,this.selectedFunction);
	},
	downloadJSONLD(){
		downloadDataJSONLD(this.geomaterials,this.selectedFunction);
	},
	downloadRDF(){
		downloadDataRDF(this.geomaterials,this.selectedFunction);
	},
      mounted() {
		  
        // this.loadImages(); // 如果没有其他图片加载需求，可以注释掉这行
      }
    },
	
    components: {
      Button
    }
  }
</script>

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }


  .section-header h3 {
    font-size: 18px;
    font-weight: bold;
    color: #333333;
  }

  .picker {
    padding: 10px;
    background-color: #f5f5f5;
    border: 1px solid #cccccc;
    border-radius: 5px;
  }

  .search-title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 20px 0;
    color: #4CAF50; /* 可以根据需要调整颜色 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 添加文本阴影效果 */
    background: linear-gradient(45deg, #ff6b6b, #f94d6a); /* 渐变背景 */
    -webkit-background-clip: text;
    color: transparent;
  }

  .element-selector {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .element-input {
    padding: 8px;
    margin: 5px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }

  .search-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    button {
      padding: 5px 10px;
      font-size: 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
	button:hover {
	  background-color: #0056b3; /* 悬停时背景颜色 */
	  transform: translateY(-2px); /* 向上移动效果 */
	}
	
	button:active {
	  transform: translateY(0); /* 按下时返回原位 */
	}
	.modal {
	  position: fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background-color: rgba(0, 0, 0, 0.5);
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	
	.modal-content {
	  background: white;
	  padding: 20px;
	  border-radius: 5px;
	  text-align: center;
	}
	
	.format-button {
	  display: block;
	  padding: 10px 15px;
	  font-size: 16px;
	  background-color: transparent; /* 透明背景 */
	  color: #333; /* 深色字体 */
	  border: 2px solid #007bff; /* 蓝色边框 */
	  border-radius: 5px;
	  margin: 5px 0; /* 上下间距 */
	  cursor: pointer;
	  transition: background-color 0.3s, color 0.3s; /* 动画效果 */
	}
	
	.format-button:hover {
	  background-color: #007bff; /* 悬停时背景色 */
	  color: white; /* 悬停时字体颜色 */
	}
	
	.cancel-button {
	  display: block;
	  padding: 10px 15px;
	  font-size: 16px;
	  background-color: transparent; /* 透明背景 */
	  color: #333; /* 深色字体 */
	  border: 2px solid #dc3545; /* 红色边框 */
	  border-radius: 5px;
	  margin-top: 10px; /* 与上方按钮间距 */
	  cursor: pointer;
	  transition: background-color 0.3s, color 0.3s; /* 动画效果 */
	}
	
	.cancel-button:hover {
	  background-color: #dc3545; /* 悬停时背景色 */
	  color: white; /* 悬停时字体颜色 */
	}
  }

  .geomaterials-section {
    margin-top: 20px;

    h3 {
      font-size: 20px;
      font-weight: bold;
      margin-top: 20px;
    }

    ul {
      list-style-type: none;
      padding: 0;

      li {
        background: #f0f0f0;
        margin: 10px 0;
        padding: 10px;
        border-radius: 5px;
      }
    }
  }
  .material-block {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  
  .info-block, .coordinates-block, .properties-block {
    margin-bottom: 10px;
  }
  
  .info-block p, .coordinates-block p, .properties-block p {
    margin: 5px 0;
  }
  * {
    user-select: text;
  }
</style>
