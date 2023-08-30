export type question_list_type = {
    q_id: string,
    question: string,
    options: string[]
}
export type Test_Kepribadian_Config = {
    duration: string,
    test_end_at: string,
    test_start_at: string,
    id: string,
    test_id: string,
    questions_list: question_list_type[],
    result_test_id: string

}
export type answer = {
    q_id: string,
    answer: string
}

export type Answers = Array<answer>

export type Test_Kepribadian_Cache = {
    is_start: boolean,
    is_finish: boolean,
    current_time: number,
    question_index: number,
    questions_list: Array<question_list_type>
}