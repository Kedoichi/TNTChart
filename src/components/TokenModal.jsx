import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const TokenModal = ({ open, onClose, token }) => {
  if (!token) return null;

  // Calculate percentage changes and format numbers
  const riseRatePercent = parseFloat(token.riserate).toFixed(2);
  const volume24h = parseFloat(token.volume24HrsETH).toFixed(2);
  const totalVolume = parseFloat(token.tradeVolumeETH).toFixed(2);
  const totalLiquidity = parseFloat(token.totalLiquidity).toFixed(2);
  const tradeVolumeUSD = parseFloat(token.tradeVolumeUSD).toFixed(2);
  const totalLiquidityUSD = parseFloat(token.totalLiquidityUSD).toFixed(2);

  console.log(token);

  // Helper function to format large numbers
  const formatNumber = (num) => {
    if (!num) return "0";
    return new Intl.NumberFormat("en-US", {
      minimization: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 500 },
          bgcolor: "#191919",
          color: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Header with Token Info */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 2 }}>
          <img
            src={`https://assets.thetatoken.org/tokens/${token.logo}`}
            alt={token.symbol}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          />
          <Box>
            <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
              {token.symbol}
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              {token.name}
            </Typography>
          </Box>
        </Box>

        {/* Stats Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            mb: 3,
          }}
        >
          {/* Rise Rate */}
          <Box
            sx={{
              p: 2,
              bgcolor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.6)", mb: 0.5 }}
            >
              Rise Rate
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#449782", fontWeight: "bold" }}
            >
              +{riseRatePercent}%
            </Typography>
          </Box>

          {/* 24h Volume */}
          <Box
            sx={{
              p: 2,
              bgcolor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.6)", mb: 0.5 }}
            >
              24h Volume
            </Typography>
            <Typography variant="body1">{volume24h} ETH</Typography>
          </Box>

          {/* Total Volume */}
          <Box
            sx={{
              p: 2,
              bgcolor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.6)", mb: 0.5 }}
            >
              Total Volume
            </Typography>
            <Typography variant="body1">{totalVolume} ETH</Typography>
          </Box>

          {/* Trade Volume in USD */}
          <Box
            sx={{
              p: 2,
              bgcolor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.6)", mb: 0.5 }}
            >
              Trade Volume (USD)
            </Typography>
            <Typography variant="body1">{tradeVolumeUSD} USD</Typography>
          </Box>

          {/* Total Liquidity */}
          <Box
            sx={{
              p: 2,
              bgcolor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.6)", mb: 0.5 }}
            >
              Total Liquidity
            </Typography>
            <Typography variant="body1">{totalLiquidity} ETH</Typography>
          </Box>

          {/* Total Liquidity in USD */}
          <Box
            sx={{
              p: 2,
              bgcolor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.6)", mb: 0.5 }}
            >
              Total Liquidity (USD)
            </Typography>
            <Typography variant="body1">{totalLiquidityUSD} USD</Typography>
          </Box>

          {/* Contract Address */}
          <Box
            sx={{
              p: 2,
              bgcolor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
              gridColumn: "1 / -1",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.6)", mb: 0.5 }}
            >
              Contract Address
            </Typography>
            <Typography variant="body1" sx={{ wordBreak: "break-all" }}>
              {token.id}
            </Typography>
          </Box>
        </Box>

        {/* Close Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button
            onClick={onClose}
            variant="contained"
            sx={{
              bgcolor: "#449782",
              "&:hover": {
                bgcolor: "#357a68",
              },
              color: "white",
              textTransform: "none",
              px: 4,
            }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default TokenModal;
