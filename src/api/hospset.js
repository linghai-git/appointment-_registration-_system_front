import request from '@/utils/request'



const api_name = '/admin/hosp/hospitalSet/findPageHospSet'

export default {
    //分页查询带条件
    getHospSetPageList(page, limit, searchObj) {
        return request({
            url: `${api_name}/${page}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },

    //锁定和取消锁定
    lockHospSet(id,status) {
        return request ({
        url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
        method: 'put'
        })
    },
  

    //删除医院设置
    deleteHospSet(id) {
        return request({
            url: `/admin/hosp/hospitalSet/${id}`,
            method: 'delete'
        })
    },

    //批量删除
    removeRows(idList) {
        return request({
            url: `/admin/hosp/hospitalSet/batchRemove`,
            method: 'delete',
            data: idList
        })
    },
    //添加医院设置
    saveHospSet(hospitalSet) {
        return request ({
        url: `/admin/hosp/hospitalSet/saveHospitalSet`,
        method: 'post',
        data: hospitalSet
        })
    },

    //显示医院设置
    getHospSet(id) {
        return request ({
          url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
          method: 'get'
        })
    },
    

    //修改医院设置，直接 调用saveHospSet
    updateHospSet(HospitalSet) {
        return request ({
          url: `/admin/hosp/hospitalSet/updateHospitalSet`,
          method: 'post',
          data: HospitalSet
        })
    },
    




}


