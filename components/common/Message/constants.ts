export const MESSAGES = {
    ERROR: {
        INVALID_SIGN_IN: '아이디 또는 비밀번호를 다시 확인해주세요.',
        SERVER_ERROR: '서버가 불안정합니다. 잠시 후 다시 시도해주세요.',
        REGISTRATION_UNAVAILABLE: '이미 등록된 차량입니다.',
        VEHICLE_NOT_FOUND: '일치하는 차량 정보가 없습니다.',
        VEHICLE_SELECTION_REQUIRED: '차량 선택은 필수입니다.',
        MILEAGE_REQUIRED: '주행거리 입력은 필수입니다.',
        DATE_REQUIRED: '차량출고일 입력은 필수입니다.',
    },
    SUCCESS: {
        REGISTRATION_AVAILABLE: '등록 가능한 차량 번호입니다.',
    },
} as const
