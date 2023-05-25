import area


P_PER_SQR_M = 2  # numero de pessoas por metro quadrado em média
FIELD_LENGTH = 60  # em metros
FIELD_WIDTH = 45  # em metros
people_at_concert = area.rectangle(FIELD_LENGTH, FIELD_WIDTH) * P_PER_SQR_M
print("Estão presentes no show aproximadamente", people_at_concert, "pessoas.")
