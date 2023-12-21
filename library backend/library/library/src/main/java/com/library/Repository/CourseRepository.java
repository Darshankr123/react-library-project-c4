package com.library.Repository;

import com.library.Entity.Courses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Courses,Integer> {
}
