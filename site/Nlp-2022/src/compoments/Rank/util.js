/**
 * rank 排行名次
 * updateTime 更新时间
 * model 
 * ROUGE1
 * ROUGE2
 * ROUGEAVG
 * ROUGEL
 */

export const EMPTY_TEXT='-'

export const tranferRankList=(rankData)=>{
    const {leaderboard=[]}=rankData
    const rankList =leaderboard
    console.log(rankList,'ranklist')
    return rankList.map((item,index)=>{
        const {created}=item
        return {
            ...item,
            rank:index+1,
            updateTime:new Date(created).toLocaleDateString(),
 

        }
    })
}