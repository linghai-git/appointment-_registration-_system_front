<template>
  <div class="app-container">
      医院设置添加
      <el-form label-width="120px">
         <el-form-item label="医院名称">
            <el-input v-model="hospitalSet.hosname"/>
         </el-form-item>
         <el-form-item label="医院编号">
            <el-input v-model="hospitalSet.hoscode"/>
         </el-form-item>
         <el-form-item label="api基础路径">
            <el-input v-model="hospitalSet.apiUrl"/>
         </el-form-item>
         <el-form-item label="联系人姓名">
            <el-input v-model="hospitalSet.contactsName"/>
         </el-form-item>
         <el-form-item label="联系人手机">
            <el-input v-model="hospitalSet.contactsPhone"/>
         </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="saveOrUpdate">保存</el-button>
         </el-form-item>
      </el-form>
   </div>
</template>

<script>
import hospset from '@/api/hospset'
export default {
    data(){
        return {
            hospitalSet:{} 
        }
    },
    created(){
        //获取路由id值 调用接口得到医院设置信息
        if(this.$route.params && this.$route.params.id) {
            const id = this.$route.params.id
            this.getHostSet(id)
        }else{
            this.hospitalSet = {}
        }
    },
    methods:{
        saveOrUpdate(){
            if(this.hospitalSet.id){
                this.update()
            }else{
                this.save()
            }
        },
        //保存设置
        save(){
            this.$confirm('此操作将保存医院设置, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => { //确定执行then方法
            hospset.saveHospSet(this.hospitalSet).then(
                res => {
                    this.$message({
                        type: 'success',
                        message: '保存成功!'
                    })
                },
                this.$router.push({path: '/hosp/list'})
            )

            })
        },
        //更新设置
        update(){
            this.$confirm('此操作将更新医院设置, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => { //确定执行then方法
            hospset.updateHospSet(this.hospitalSet).then(
                res => {
                    this.$message({
                        type: 'success',
                        message: '更新成功!'
                    })
                },
                this.$router.push({path: '/hosp/list'})
            )

            })
        },

        //显示医院设置
        getHostSet(id) {
         hospset.getHospSet(id) 
            .then(response => {
               this.hospitalSet = response.data
            })
        },

    }
}
</script>