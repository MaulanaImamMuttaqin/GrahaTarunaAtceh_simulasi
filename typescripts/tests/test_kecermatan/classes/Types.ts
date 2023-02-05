export type Configuration = {
    duration: string,
    id: string,
    number_digits: string,
    question_total: string,
    test_end_at: string,
    test_id: string,
    test_start_at: string,
    result_test_id: string,
    auto: boolean
}

export type answer_detail = {
    question_number: string,
    total: number,
    wrong: number,
    correct: number,
    tot_diff: number | null,
    stability: number | null
}
export type Score = {
    overall: {
        total: number,
        wrong: number,
        correct: number,
        tot_diff_total?: number,
        total_ketahanan?: number
    },
    detail: Array<answer_detail>,
    test_final_score?: {
        ketahanan: number,
        ketelitian: number,
        kecepatan: number,
        kecepatan_final: number,
        ketelitian_final: number,
        ketahanan_final: number,
        final_result: number,

    }
}

export type Test_cache = {
    is_start: boolean,
    is_finish: boolean,
    current_time: number,
    question_index: number,
    numbers_list: string[]
}