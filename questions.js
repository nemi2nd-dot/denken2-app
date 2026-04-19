// 問題データは各科目ファイルに分割されています
// q_theory.js  → Q_THEORY  (理論 250問)
// q_power.js   → Q_POWER   (電力 250問)
// q_machine.js → Q_MACHINE (機械 250問)
// q_law.js     → Q_LAW     (法規 250問)

const QUESTIONS = [...Q_THEORY, ...Q_POWER, ...Q_MACHINE, ...Q_LAW];
