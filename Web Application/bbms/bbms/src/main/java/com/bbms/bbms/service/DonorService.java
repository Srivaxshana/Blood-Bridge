package com.bbms.bbms.service;

import com.bbms.bbms.dto.DonorDTO;

import java.util.List;

public interface DonorService {
    DonorDTO addDonor(DonorDTO donorDTO);
    List<DonorDTO> getAllDonors();
    DonorDTO getDonorById(Long id);
    DonorDTO updateDonor(Long id, DonorDTO donorDTO);
    void deleteDonor(Long id);
}
