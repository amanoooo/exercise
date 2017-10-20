        var exampleData = {
            key:"",
            key2:"",
            keys:["a","b","c","d","e","f","g","h","i","j","k","l","m","n"
                ,"o","p","q","r","s","t","u","v","w","x","y","z"],
            datas:{
            	a:["alpha1","alpha2"],b:["bob1","bob2","bob3"],c:["clara1","clara2"],
                d:['david1','david2','david3'],e:['eva'],f:['frank'],g:['green'],
                h:['helen'],i:['ian'],j:['jack'],k:['kim']
                ,l:['Lijiajai'],m:['mary'],n:['nancy'],o:['oscar'],p:['paul'],q:['queen'],
                r:['robert'],s:['sunny'],t:['thomas'],u:['una'],v:['victor'],
                w:['will'],x:['xander'],y:['york'],z:['zoe']
            },
            dataShow:[],
            dataShow2:[],
        }

        var exampleMethod={
        	query:function(){
        		alert("aaa");
        	},


        }
        var exampleComputed={
		    reversedMessage: function () {
		      return this.key.split('').reverse().join('')
    		},
    		choose: function(){
                for(var i=0;i<26;i++){
                    var tem=this.keys[i];
                    if((this.key.indexOf(tem))==0){
                    this.dataShow=eval("this.datas." + tem);
    		 		 return true
    			     }//if
                }//for循环
    		}//choose
        }

        var exampleWatch={
              key2: function () {
              
                for(var i=0;i<26;i++){
                    var tem=this.keys[i];
                    if((this.key2.indexOf(tem))==0){
                    this.dataShow2=eval("this.datas." + tem);
                     return true
                     }//if
                }//for循环
            },

        }
