

# 抗扰性验证



[【金山文档】 Efficient Neural Network Robustness Certification](https://kdocs.cn/l/crCSAfGKOhJ4)

## Notation

假设神经网络一共有 $m$ 层，输入 $x\in R^{n_0}$,每一层神经元数量为 $n_k,k\in [m]$,这里 $[m]=\{1,2, \cdots, m\}$。

第 $k-1$ 层到 $k$ 层的权值矩阵为 $\mathbf{W}^{(k)} \in R^{n_k \times n_{k-1}}$，偏置 $b^{(k)} \in R^{n_k}$ 。

$\Phi_k: R^{n_0} \rightarrow R^{n_k}$ 表示第 $k$ 层的激活值，$\Phi_k(\mathbf{x})=\sigma\left(\mathbf{W}^{(k)} \Phi_{k-1}(\mathbf{x})+\mathbf{b}^{(k)}\right), \forall k \in[m-1]$， 其中$\Phi_0(\mathbf{x})=\mathbf{x}$，$f(\mathbf{x})=\Phi_m(\mathbf{x})=\mathbf{W}^{(m)} \Phi_{m-1}(\mathbf{x})+\mathbf{b}^{(m)}$，$f_j(\mathbf{x})=\left[\Phi_m(\mathbf{x})\right]_j$ 。

那么对于第 $k$ 层的第 $r$ 个神经元，设它的预激活值为  $\mathbf{y}_r^{(k)}$,  $\mathbf{y}_r^{(k)}=\mathbf{W}_{r,:}^{(k)} \Phi_{k-1}(\mathbf{x})+\mathbf{b}_r^{(k)}$，$\mathbf{W}_{r,:}^{(k)}$ 表示矩阵 $\mathbf{W}^{(k)}$的第 $r$ 行，

让输入 $x$的扰动值，限制在$\mathbb{B}_p\left(\mathbf{x}_{\mathbf{0}}, \epsilon\right):=\left\{\mathbf{x} \mid\left\|\mathbf{x}-\mathbf{x}_{\mathbf{0}}\right\|_p \leq \epsilon\right\}$内，当 $\mathbf{x}_{\mathbf{0}}\in B_p(x_0,\epsilon)$, let $\mathbf{l}_r^{(k)}, \mathbf{u}_r^{(k)} \in \mathbb{R}$ 是预激活值 $\mathbf{y}_r^{(k)}$的上界和下界 i.e. $\mathbf{l}_r^{(k)} \leq \mathbf{y}_r^{(k)} \leq \mathbf{u}_r^{(k)}$。



### 激活函数的线性上上下界

定义两个线性函数 $h_{U, r}^{(k)}, h_{L, r}^{(k)}$ : $\mathbb{R} \rightarrow \mathbb{R}$, 
$$
h_{U, r}^{(k)}(y)=\alpha_{U, r}^{(k)}\left(y+\beta_{U, r}^{(k)}\right), h_{L, r}^{(k)}(y)=\alpha_{L, r}^{(k)}\left(y+\beta_{L, r}^{(k)}\right)
$$
使得 $h_{L, r}^{(k)}(y) \leq \sigma(y) \leq$ $h_{U, r}^{(k)}(y), y \in\left[\mathbf{l}_r^{(k)}, \mathbf{u}_r^{(k)}\right], \forall k \in[m-1], r \in\left[n_k\right]$ 其中$\alpha_{U, r}^{(k)}, \alpha_{L, r}^{(k)} \in \mathbb{R}^{+}, \beta_{U, r}^{(k)}, \beta_{L, r}^{(k)} \in \mathbb{R}$.

 $\alpha_{U, r}^{(k)}, \alpha_{L, r}^{(k)}, \beta_{U, r}^{(k)}, \beta_{L, r}^{(k)}$ 依赖 $\mathbf{l}_r^{(k)}$ and $\mathbf{u}_r^{(k)}$, 也就是说对于不同的 $\mathbf{l}_r^{(k)}$ and $\mathbf{u}_r^{(k)}$ 可以选择不同的参数。

Also, for ease of exposition, in this paper we restrict $\alpha_{U, r}^{(k)}, \alpha_{L, r}^{(k)} \geq 0$. However, Theorem 3.2 can be easily generalized to the case of negative $\alpha_{U, r}^{(k)}, \alpha_{L, r}^{(k)}$.

### 定理中涉及的符号

