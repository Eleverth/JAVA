package com.greenplatform.dao;

import com.greenplatform.model.PlateUserBlacklist;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface PlateUserBlacklistMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table plate_user_blacklist
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(String cUserid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table plate_user_blacklist
     *
     * @mbggenerated
     */
    int insert(PlateUserBlacklist record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table plate_user_blacklist
     *
     * @mbggenerated
     */
    List<PlateUserBlacklist> selectAll();
}