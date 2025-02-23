package com.greenplatform.dao;

import com.greenplatform.model.TGreenSpSpmx;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface TGreenSpSpmxMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_green_sp_spmx
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(String cSpbh);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_green_sp_spmx
     *
     * @mbggenerated
     */
    int insert(TGreenSpSpmx record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_green_sp_spmx
     *
     * @mbggenerated
     */
    TGreenSpSpmx selectByPrimaryKey(String cSpbh);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_green_sp_spmx
     *
     * @mbggenerated
     */
    List<TGreenSpSpmx> selectAll();

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_green_sp_spmx
     *
     * @mbggenerated
     */
    int updateByPrimaryKey(TGreenSpSpmx record);

    List selectTGreenSpSpmx (TGreenSpSpmx tGreenSpSpmx);//查询商品明细
}