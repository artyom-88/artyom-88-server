import httpClient from 'src/client/app/http-client';
import { CareerDTO, CareerModel } from 'src/common/types/common-career-types';

const careerItemAdapter = (dto: CareerDTO): CareerModel => ({
  ...dto,
  endDate: dto.endDate && new Date(dto.endDate),
  startDate: new Date(dto.startDate),
});

export const careerListRequest = async (): Promise<CareerModel[]> => {
  const dto = await httpClient.get('career').json<CareerDTO[]>();
  return dto.map(careerItemAdapter);
};

export const careerItemRequest = async (id: string): Promise<CareerModel> => {
  const dto = await httpClient.get(`career/${id}`).json<CareerDTO>();
  return careerItemAdapter(dto);
};
