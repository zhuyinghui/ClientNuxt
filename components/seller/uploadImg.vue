<template>
  <div>
    <div class="uploadimg">
      <div class="deleimg" v-for="(item,index) in images" :key="index">
        <img :src="item" alt="">
        <div class="dele" @click="deleimg(index)">x</div>
      </div>
      <div class="addimg" id="addimg">
        <div>
          <div class="hline"></div>
          <div class="sline"></div>
        </div>
        <input type="file" accept="image/*" id="file" multiple="multiple"/>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "uploadImg",
      data(){
        return{
          images:[]
        }
      },
      methods:{
        uploadimg(){
          document.querySelector('#file').addEventListener('change',()=>{
              let fileList= document.querySelector('#file').files;
              for(let file of fileList){
                if(/^image\/png$|jpeg$|jpg$/.test(file.type)){
                    // let imgsrc=URL.createObjectURL(item);
                    let reader=new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload=function () {
                        callback(reader.result);
                    };
                }else{
                  alert('上传的图片格式不对');
                }
              }
          });
          let callback=(imgsrc)=>{
            if(this.images.length<3){
              this.images.push(imgsrc);
            }
            this.toParent();
          };
        },
        toParent(){
          if(this.images.length===3){
            document.querySelector('#addimg').style.display='none';
          }
          this.$emit("ParentFn",this.images)
        },
        deleimg(index){
          this.images.splice(index,1);
          if(this.images.length<3){
            document.querySelector('#addimg').style.display='block';
          }
        }
      },
      mounted() {
          this.uploadimg()
      }
    }
</script>

<style scoped>
  .uploadimg{
    width: 100%;
    display: flex;flex-wrap: wrap;
  }
  .uploadimg img{
    width: 60px;height: 60px;background: #fff;
    margin-right: 15px;
  }
  .addimg{
    height: 60px;width: 60px;
    border: 1px dashed #d7d7d7;
    position: relative;
  }
  .addimg input{
    position: absolute;top:0;left:0;
    opacity: 0;
    height: 60px;width: 60px;
  }
  .hline{
    width: 3px;height:40px;background: #d7d7d7;
    position: absolute;left:28px;top:10px;
  }
  .sline{
    width: 40px;height:3px;background: #d7d7d7;
    position: absolute;top:28px;left: 10px;
  }
  .deleimg{
    position: relative;
  }
  .dele{
    height: 15px;width: 15px;background: #7f828b;color: #fff;
    position: absolute;right: 5px;top:-4px;
    line-height: 15px;text-align: center;
    border-radius: 50%;
    cursor: pointer;
  }
</style>
