/**
 * rank 排行名次
 * updateTime 更新时间
 * model 
 * ROUGE1
 * ROUGE2
 * ROUGEAVG
 * ROUGEL
 */

const EMPTY_TEXT='-'

export const tranferRankList=(rankData)=>{
    const {leaderboard=[]}=rankData
    const rankList =leaderboard
    console.log(rankList,'ranklist')
    return rankList.map((item,index)=>{
        const {submission,scores}=item
        return {
            ...item,
            rank:index+1,
            updateTime:new Date(submission.created).toLocaleDateString(),
            model:submission.description,
            ROUGE1:scores['ROUGE-1']||EMPTY_TEXT,
            ROUGE2:scores['ROUGE-2']||EMPTY_TEXT,
            ROUGEL:scores['ROUGE-L']||EMPTY_TEXT,
            ROUGEAVG:scores['ROUGE-AVG']||EMPTY_TEXT

        }
    })
}