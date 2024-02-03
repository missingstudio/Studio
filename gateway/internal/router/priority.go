package router

import (
	"sync/atomic"

	"github.com/missingstudio/studio/backend/internal/providers/base"
)

const (
	Priority Strategy = "priority"
)

type PriorityRouter struct {
	idx       *atomic.Uint64
	providers []base.ProviderInterface
}

func NewPriorityRouter(providers []base.ProviderInterface) *PriorityRouter {
	return &PriorityRouter{
		idx:       &atomic.Uint64{},
		providers: providers,
	}
}

func (r *PriorityRouter) Iterator() ProviderIterator {
	return r
}

func (r *PriorityRouter) Next() (base.ProviderInterface, error) {
	idx := int(r.idx.Load())

	// Todo: make a check for healthy provider
	model := r.providers[idx]
	r.idx.Add(1)

	return model, nil
}
