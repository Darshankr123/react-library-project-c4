package com.library.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CourseDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int courseContentId;
    private String courseName;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String courseContent;
}
