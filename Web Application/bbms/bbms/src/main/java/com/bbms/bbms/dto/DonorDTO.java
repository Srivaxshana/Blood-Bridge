package com.bbms.bbms.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DonorDTO {
    private Long id;
    private String name;
    private String bloodType;
    private String contactNo;
    private String address;
}
