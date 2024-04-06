import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
// tạo decorator Public để truyền thêm Metadate vào function
// Metadate sẽ được lấy theo (key, value)

export const ResponseMessage_KEY = 'isPublic';
export const ResponseMessage = (message: string) =>
  SetMetadata(ResponseMessage_KEY, true);
