export type ExcelRows = {
    user_id: string,
    nama: string
}

export type Participants = {
    user_id: string,
    name: string,
}

export type KecermatanDetail = {
    id: string,
    test_id: string,
    class_id: string,
    question_total: string,
    number_digits: string,
    duration: string,
    test_start_at: string,
    test_end_at: string,
    is_open: string,
    total_participant: string,
    description: string,
    mode: string,
    questions_list: string,
}

export type KepribadianDetail = {
    id: string,
    test_id: string,
    class_id: string,
    duration: string,
    test_start_at: string,
    test_end_at: string,
    questions_list: string,
}
export type KecerdasanDetail = {
    id: string,
    test_id: string,
    class_id: string,
    duration: string,
    test_start_at: string,
    test_end_at: string,
    questions_list: string,
}

export type TestResults = {
    id: string,
    user_id: string,
    name: string,
    kecermatan: string,
    kepribadian: string,
    kecerdasan: string
}


export type questionTypes = {
    q_id: string,
    question: string,
    options: any,
    max_value?: string,
    options_score?: any,
    answer: string
}