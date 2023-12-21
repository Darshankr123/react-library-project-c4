package com.library.Repository;

import com.library.Entity.CourseDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseDetailsRepository extends JpaRepository<CourseDetails,Integer> {
}
