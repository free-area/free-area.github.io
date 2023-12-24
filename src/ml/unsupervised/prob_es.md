# 概率密度估计

概率密度估计（Probabilistic Density Estimation），简称密度估计（Density Estimation），是基于一些观测样本来估计一个随机变量的概率密度函数．密度估计在数据建模、机器学习中使用广泛．

密度估计方法可以分为两类：==参数密度估计==和==非参数密度估计==．

## **参数密度估计**

参数密度估计 ( Parametric Density Estimation) 是根据先验知识假设随机变量服从某种分布, 然后通过训练样本来估计分布的参数.

令 $\mathcal{D}=\left\{\boldsymbol{x}^{(n)}\right\}_{n=1}^N$ 为从某个未知分布中独立抽取的 $N$ 个训练样本, 假设这些样本服从一个概率分布函数 $p(\boldsymbol{x} ; \theta)$, 其对数似然函数为
$$
\log p(\mathcal{D} ; \theta)=\sum_{n=1}^N \log p\left(\boldsymbol{x}^{(n)} ; \theta\right) .
$$

使用最大似然估计 ( Maximum Likelihood Estimation, MLE ) 来寻找参数$\theta$ 使得 $\log p(\mathcal{D} ; \theta)$ 最大. 这样参数估计问题就转化为最优化问题:
$$
\theta^{M L}=\underset{\theta}{\arg \max } \sum_{n=1}^N \log p\left(\boldsymbol{x}^{(n)} ; \theta\right) .
$$
### 正态分布

假设样本 $\boldsymbol{x} \in \mathbb{R}^D$ 服从正态分布
$$
\mathcal{N}(\boldsymbol{x} \mid \boldsymbol{\mu}, \boldsymbol{\Sigma})=\frac{1}{(2 \pi)^{D / 2}|\boldsymbol{\Sigma}|^{1 / 2}} \exp \left(-\frac{1}{2}(\boldsymbol{x}-\mu)^{\top} \boldsymbol{\Sigma}^{-1}(\boldsymbol{x}-\boldsymbol{\mu})\right),
$$

其中 $\boldsymbol{\mu}$ 和 $\boldsymbol{\Sigma}$ 分别为正态分布的均值和方差.
数据集 $\mathcal{D}=\left\{\boldsymbol{x}^{(n)}\right\}_{n=1}^N$ 的对数似然函数为
$$
\log p(\mathcal{D} \mid \mu, \boldsymbol{\Sigma})=-\frac{N}{2} \log \left((2 \pi)^D|\boldsymbol{\Sigma}|\right)-\frac{1}{2} \sum_{n=1}^N\left(\boldsymbol{x}^{(n)}-\mu\right)^{\top} \boldsymbol{\Sigma}^{-1}\left(\boldsymbol{x}^{(n)}-\mu\right) .
$$

分别求上式关于 $\mu, \boldsymbol{\Sigma}$ 的偏导数,并令其等于 0 . 可得,
$$
\begin{aligned}
& \mu^{M L}=\frac{1}{N} \sum_{n=1}^N \boldsymbol{x}^{(n)}, \\
& \boldsymbol{\Sigma}^{M L}=\frac{1}{N} \sum_{n=1}^N\left(\boldsymbol{x}^{(n)}-\mu^{M L}\right)\left(\boldsymbol{x}^{(n)}-\mu^{M L}\right)^{\top} .
\end{aligned}
$$

### 多项分布

假设样本服从 $K$ 个状态的多项分布, 令 one-hot 向量 $\boldsymbol{x} \in\{0,1\}^K$ 来表示第 $k$个状态, 即 $x_k=1$, 其余 $x_{i, i \neq k}=0$. 样本 $\boldsymbol{x}$ 的概率密度函数为
$$
p(\boldsymbol{x} \mid \boldsymbol{\mu})=\prod_{k=1}^K \mu_k^{x_k},
$$

其中 $\mu_k$ 为第 $k$ 个状态的概率, 并满足 $\sum_{k=1}^K \mu_k=1$.
数据集 $\mathcal{D}=\left\{\boldsymbol{x}^{(n)}\right\}_{n=1}^N$ 的对数似然函数为
$$
\log p(\mathcal{D} \mid \mu)=\sum_{n=1}^N \sum_{k=1}^K x_k^{(n)} \log \left(\mu_k\right) .
$$

多项分布的参数估计为约束优化问题. 引入拉格朗日乘子 $\lambda$, 将原问题转换为无约束优化问题.
$$
\max _{\mu, \lambda} \sum_{n=1}^N \sum_{k=1}^K x_k^{(n)} \log \left(\mu_k\right)+\lambda\left(\sum_{k=1}^K \mu_k-1\right) .
$$
分别求上式关于 $\mu_k, \lambda$ 的偏导数, 并令其等于 0 . 可得,
$$
\mu_k^{M L}=\frac{m_k}{N}, \quad 1 \leq k \leq K
$$

其中 $m_k=\sum_{n=1}^N x_k^{(n)}$ 为数据集中取值为第 $k$ 个状态的样本数量.
在实际应用中,参数密度估计一般存在以下问题:

1.  ==模型选择问题==: 即如何选择数据分布的密度函数. 实际数据的分布往往是非常复杂的,而不是简单的正态分布或多项分布.
2. ==不可观测变量问题==: 即我们用来训练的样本只包含部分的可观测变量, 还有一些非常关键的变量是无法观测的, 这导致我们很难准确估计数据的真实分布.
3.  ==维度灾难问题==: 即高维数据的参数估计十分困难. 随着维度的增加, 估计参数所需要的样本数量指数增加. 在样本不足时会出现过拟合.